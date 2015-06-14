var Client;
Client = {

    /**
     * Open web socket connection
     *
     * @param url
     * @param callback
     */
    init: function(url, callback) {

        this.connection = new WebSocket(url);

        this.connection.onmessage = function(e){

            var response = JSON.parse(e.data);

            callback(response);

        }

    },

    getConnection: function() {

        return this.connection;

    }


};