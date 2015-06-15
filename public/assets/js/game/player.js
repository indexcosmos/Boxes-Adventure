var Player;
Player = {

    profiles: {},

    init: function()
    {
        Dispatcher.add('before.update', 'before.update', function($){
            Player.before($.detail);
        });

        Dispatcher.add('after.update', 'after.update', function($){
            Player.after($.detail);
        });
    },

    /**
     * Handle collisions
     * @param dir
     */
    collide: function(dir)
    {
        if (dir === "l" || dir === "r") {
            Game.config.player.velX = 0;
            Game.config.player.jumping = false;
            Game.config.player.collide = 10;
        } else if (dir === "b") {
            Game.config.player.grounded = true;
            Game.config.player.jumping = false;
        } else if (dir === "t") {
            Game.config.player.velY *= -1;
        }
    },

    before: function($)
    {
        // unset previous collisions
        if($.config.player.collide){

            Game.config.player.collide -= 1;

        }
    },

    after: function($)
    {
        var profile = $.config.player.profile;

        this.profiles[profile]($.config);

        Player.draw($.context, $.config.player);
    },

    draw: function(context, player)
    {
        if(player.dir == 'l'){

            if(player.crouching){

                Avatar.down_left(context, player.x, player.y);

            } else {

                Avatar.left(context, player.x, player.y);

            }

        } else if(player.dir == 'r'){

            if(player.crouching){

                Avatar.down_right(context, player.x, player.y);

            } else {

                Avatar.right(context, player.x, player.y);

            }
        }
    }

};