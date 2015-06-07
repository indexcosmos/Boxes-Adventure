<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use BoxesAdventure\Location;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
	new HttpServer(
            new WsServer(
                new Location()
            )
        ),    
	8081
);

$server->run();
