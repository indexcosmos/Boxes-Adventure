/**
 * Avatar
 *
 * @param ctx
 * @param x
 * @param y
 * @param dir
 */
Property.avatar = function(ctx, x, y, dir){

    Avatar[dir](ctx, x, y, true);

};

/**
 * Blue Box
 *
 * @param ctx
 * @param x
 * @param y
 * @param dir
 * @returns {{x: *, y: *, width: number, height: number}}
 */
Property.blue_box = function(ctx, x, y, dir){

    var width = 40;
    var height = 40;

    x -= width;
    y -= height * 2;

    ctx.beginPath();
    ctx.fillStyle = "rgb(50, 117, 200)";
    ctx.moveTo(x+6.7, y+40.5);
    ctx.lineTo(x+40.5, y+40.5);
    ctx.lineTo(x+40.5, y+6.5);
    ctx.lineTo(x+6.7, y+6.5);
    ctx.lineTo(x+6.7, y+40.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    return {
        x: x,
        y: y,
        width: width,
        height: height
    };

};


/**
 * Green Box
 *
 * @param ctx
 * @param x
 * @param y
 * @param dir
 * @returns {{x: *, y: *, width: number, height: number}}
 */
Property.green_box = function(ctx, x, y, dir){

    var width = 40;
    var height = 40;
    var orig_x = x;
    var orig_y = y;

    ctx.beginPath();
    ctx.fillStyle = "rgb(50, 117, 85)";
    ctx.moveTo(x+6.7, y+40.5);
    ctx.lineTo(x+40.5, y+40.5);
    ctx.lineTo(x+40.5, y+6.5);
    ctx.lineTo(x+6.7, y+6.5);
    ctx.lineTo(x+6.7, y+40.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    return {
        x: orig_x,
        y: orig_y,
        width: width,
        height: height
    };

};

/**
 * Purple Box
 *
 * @param ctx
 * @param x
 * @param y
 * @param dir
 * @returns {{x: *, y: *, width: number, height: number}}
 */
Property.purple_box = function(ctx, x, y, dir){

    var width = 40;
    var height = 40;

    ctx.beginPath();
    ctx.fillStyle = "rgb(50, 30, 85)";
    ctx.moveTo(x+6.7, y+40.5);
    ctx.lineTo(x+40.5, y+40.5);
    ctx.lineTo(x+40.5, y+6.5);
    ctx.lineTo(x+6.7, y+6.5);
    ctx.lineTo(x+6.7, y+40.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    return {

        x: x,
        y: y,
        width: width,
        height: height

    };

};