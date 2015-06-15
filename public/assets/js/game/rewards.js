var Rewards;
Rewards = {

    fillStyle: 'transparent',

    init: function()
    {
        Dispatcher.add('before.update', 'before.update', function($){
            Rewards.draw($.detail);
        });
    },

    draw: function($)
    {
        $.context.fillStyle = this.fillStyle;

        var length = Helper.count($.config.rewards);

        for (var i = 0; i < length; i++) {

            $.context.fillRect($.config.rewards[i].x, $.config.rewards[i].y, $.config.rewards[i].width, $.config.rewards[i].height);

            var dir = Helper.colCheck($.config.player, $.config.rewards[i], false);

            if(typeof dir == "string"){

                Game.config.player.profile = $.config.rewards[i].profile;

            }

        }
    }

};