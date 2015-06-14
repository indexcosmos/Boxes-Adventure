
var log = function(n){
    console.log(n);
};

// Request flow starts here...
window.onload = function(){

    // preload maps
    Config.preload('assets/config/routes.json', function(config){

        // dispatch router
        Router.init(config).dispatch('map', function(route, config){

            // initialize the game
            Game.init('gameboard');

            // get next map
            var next = config.next;

            // pre-load map config
            Config.preload(config.config, function(config){

                // load the game
                Game.load(config, next);

            });

        });

    });

};