var HUD;
HUD = {

    init: function()
    {
        Dispatcher.add('before.update', 'before.update', function($){
            HUD.draw($.detail);
        });
    },

    /**
     * Draw hud
     */
    draw: function($)
    {
        $.context.fillStyle = 'black';
        $.context.globalAlpha = 0.5;
        $.context.fillRect(0, 0, 200, 55);
        $.context.globalAlpha = 1;

        var count = 1;

        for(var m in Property.properties){

            if(Property.properties[m].type == 'avatar') count++;

        }

        $.context.fillStyle = 'white';
        $.context.fillText('Profile: '+$.config.player.profile, 5, 15);
        $.context.fillText('To Win: '+$.config.player.finish_profile, 5, 30);
        $.context.fillText('Players: '+count, 5, 45);
    }
};