<?php
namespace BoxesAdventure;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class GameServer implements MessageComponentInterface
{
    /**
     * @var \SplObjectStorage
     */
    protected $clients;

    /**
     * Instantiate our client storage
     */
    public function __construct()
    {
        $this->clients = new \SplObjectStorage;
    }

    /**
     * Store the new connection to send messages to later
     *
     * @param ConnectionInterface $conn
     */
    public function onOpen(ConnectionInterface $conn)
    {
        $this->clients->attach($conn);
    }

    /**
     * @param ConnectionInterface $from
     * @param string $msg
     */
    public function onMessage(ConnectionInterface $from, $msg)
    {
        foreach ($this->clients as $client) {

            // The sender is not the receiver, send to each client connected
            if ($from !== $client) {

                $client->send($msg);

            }

        }
    }

    /**
     * The connection is closed, remove it, as we can no longer send it messages
     *
     * @param ConnectionInterface $conn
     */
    public function onClose(ConnectionInterface $conn)
    {
        $this->clients->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        $conn->close();
    }
}
