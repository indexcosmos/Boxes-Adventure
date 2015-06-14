var Router;
Router = {

    config: {},

    init: function(config)
    {
        this.config = config;

        return this;
    },

    dispatch: function(param, callback){

        var route;

        if (route = Router.getParam(param) && Router.match(route)) {

            // route found

        } else {

            route = Router.first();

        }

        return callback(route, this.config[route]);
    },

    match: function(route)
    {
        for (var m in this.config) {

            if (route == m) {

                return true;

            }

        }

        return false;
    },

    first: function(){

        for (var m in this.config) break;

        return m;

    },

    getParam: function(name) {

        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));

    }

};