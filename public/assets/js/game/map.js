var Map;
Map = {

    size: 1,

    home: {},

    blocks: {},

    block_color: 'transparent',

    init: function()
    {
        Dispatcher.add('before.update', 'before.update', function($){
            Map.before($.detail);
        });

        Dispatcher.add('after.update', 'after.update', function($){
            Map.after($.detail);
        });
        
        return this;
    },

    /**
     * Draw event handler; called prior to
     * handling keystrokes.
     *
     * @param $
     */
    before: function($)
    {
        $.config.player.grounded = false;

        Map._home($.context, $.config.home);

        Map._blocks($.context, $.config.blocks, $.config.camera, $.config.size);
    },

    /**
     * Action event handler; called after
     * handling keystrokes.
     *
     * @param $
     */
    after: function($)
    {
        var dir = Helper.colCheck($.config.player, $.config.home, false);

        // Winning! Next level.
        if(typeof dir == "string" && $.config.player.profile == $.config.player.finish_profile){

            window.location = "?map="+$.config.next;

        }
    },

    /**
     * Render the blocks
     *
     * @param ctx
     * @param blocks
     * @param camera
     * @param size
     * @private
     */
    _blocks: function(ctx, blocks, camera, size)
    {
        ctx.fillStyle = this.block_color;

        for (var b = 0; b < blocks.length; b++) {

            var vx = 0;

            if(size > 1) {

                if(camera.x > 0) vx = camera.x * (-0.71 * size);

                var max_width = (Canvas.width * (size - 1)) * -1;

                if(vx < max_width){
                    vx = max_width;
                    Game.config.camera.locked = true;
                } else {
                    Game.config.camera.locked = false;
                }

            }

            var block = {
                x: blocks[b].x + vx,
                y: blocks[b].y,
                width: blocks[b].width,
                height: blocks[b].height
            };

            ctx.fillRect(block.x, block.y, block.width, block.height);

            var dir = Helper.colCheck(Game.config.player, block, true);

            Player.collide(dir);

        }
    },

    /**
     * Render the home object
     *
     * @param ctx
     * @param config
     * @private
     */
    _home: function(ctx, config)
    {
        ctx.fillStyle = config.color;

        ctx.fillRect(config.x, config.y, config.width, config.height);
    }

};