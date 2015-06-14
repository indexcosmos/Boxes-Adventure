var Property;
Property = {

    rez_object: 'blue_box',

    properties: {},

    init: function()
    {
        // add click to rez
        Dispatcher.add('rez', 'mousedown', Property.click);

        Dispatcher.add('request', 'request', Property.request);

        Dispatcher.add('before.update', 'before.update', function($){
            Property.draw($.detail);
        });

        return this;
    },

    click: function(event)
    {
        if(Game.config.player.rez_limit > 0){

            Game.config.player.rez_limit--;

            this.properties.push({
                type: this.rez_object,
                x: event.pageX,
                y: event.pageY,
                dir:null
            });

        }
    },

    draw: function($)
    {
        for (var m in this.properties) {

            var x = this.properties[m].x;

            var y = this.properties[m].y;

            var args = this.properties[m].args;

            var type = this.properties[m].type;

            var coordinates = this[type]($.context, x, y, args);

            if(coordinates){

                var dir = Helper.colCheck($.config.player, coordinates, true);

                Player.collide(dir);

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

                return;
            }

        }

        // add new property
        this.properties.push({
            type:   'avatar',
            sig:    response.sig,
            args:   response.dir,
            x:      response.x,
            y:      response.y
        });

    }

};