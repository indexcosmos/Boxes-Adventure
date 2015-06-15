var Router;
Router = {

    config: {},

    init: function(config)
    {
        this.config = config;

        return this;
    },

    /**
     * Dispatch the route callback
     *
     * @param param
     * @param callback
     */
    dispatch: function(param, callback)
    {
        var route = Router.getParam(param);

        if (!Router.match(route)) {

            route = Router.first();

        }

        callback(route, this.config[route]);
    },

    /**
     * Match route to config
     *
     * @param route
     * @returns {*|boolean}
     */
    match: function(route)
    {
        return route && typeof this.config[route] != 'undefined';
    },

    /**
     * Get first key in config
     *
     * @returns {string}
     */
    first: function()
    {
        for (var m in this.config) break;

        return m;
    },

    /**
     * Get URI param
     *
     * @param name
     * @returns {Array|{index: number, input: string}|string}
     */
    getParam: function(name)
    {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

};