/**
 * Box profile
 */
Player.profiles.box = function()
{
    Game.config.player.jump = 1.0;

    Game.config.player.double_jump = 1.0;
};

/**
 * Square profile
 */
Player.profiles.square = function()
{
    Game.config.player.jump = 1.0;

    Game.config.player.double_jump = 1.0;

    //todo rebuild rez
    //if(!rezzed.length) Game.player.rez_limit = map.player.rez_limit;
};

/**
 * Star profile
 */
Player.profiles.star = function()
{
    Game.config.player.jump = 2.0;

    Game.config.player.double_jump = 1.2;
};

/**
 * Circle profile
 */
Player.profiles.circle = function()
{
    Game.keys[38] = true;

    Game.config.player.jump = 1.5;

    Game.config.player.double_jump = 1.2;
};