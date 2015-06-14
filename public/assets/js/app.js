
var log = function(n){
    console.log(n);
};

// Request flow starts here...
window.onload = function(){

    // preload maps
    Config.preload('assets/config/routes.json', function(config){

        // dispatch router
        Router.init(config).dispatch('map', function(route, map){

            // initialize the game
            Game.init('gameboard');

            // pre-load map config
            Config.preload(map.config, function(config){

                // set the next map
                config.next = map.next;

                // load the game
                Game.load(config);

            });

        });

    });

};