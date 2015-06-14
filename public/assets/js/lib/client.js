var Client;
Client = {

    /**
     * Open web socket connection
     *
     * @param url
     */
    init: function(url)
    {
        this.connection = new WebSocket(url);

        return this;
    },

    /**
     * Listen to connection
     *
     * @param callback
     */
    listen: function(callback)
    {
        this.connection.onmessage = function(e){

            var response = JSON.parse(e.data);

            callback(response);

        }
    },

    /**
     * Get the connection
     *
     * @returns {WebSocket|*}
     */
    getConnection: function()
    {
        return this.connection;
    }


};