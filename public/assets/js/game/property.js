var Property;
Property = {

    rez_object: 'blue_box',

    properties: [],

    init: function()
    {
        // add click to rez
        Dispatcher.add('rez', 'mousedown', function(event){
            Property.click(event);
        });

        // listen for remote players
        Dispatcher.add('request', 'request', function($){
            Property.request($.detail);
        });

        Dispatcher.add('before.update', 'before.update', function($){
            Property.draw($.detail);
        });
    },

    click: function(event)
    {
        log(Property.properties);
        if(Game.config.player.build && Game.config.player.rez_limit > 0){

            Game.config.player.rez_limit--;

            this.properties.push({
                type: this.rez_object,
                x: event.pageX,
                y: event.pageY,
                dir: null,
                sig: 'rez_object'
            });

        }
    },

    draw: function($)
    {
        for (var m in this.properties) {

            var x = this.properties[m].x;

            var y = this.properties[m].y;

            var dir = this.properties[m].dir;

            var type = this.properties[m].type;

            var coordinates = this[type]($.context, x, y, dir);

            if(coordinates){

                var col = Helper.colCheck($.config.player, coordinates, true);

                Player.collide(col);

            }
        }
    },

    request: function(response)
    {
        // check each property for match in response
        for (var m in this.properties) {

            var sig = this.properties[m].sig;

            // update existing property
            if(response.sig == sig){

                this.properties[m].x = response.x;

                this.properties[m].y = response.y;

                this.properties[m].dir = response.dir;

                return;
            }

        }

        // add new property
        this.properties.push({
            type:   'avatar',
            sig:    response.sig,
            dir:    response.dir,
            x:      response.x,
            y:      response.y
        });

    }

};