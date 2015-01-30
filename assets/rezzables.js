
var rezzed = [];

var rezzables = {
    
  blue_box: function(ctx, x, y){
      
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

  },
    
  green_box: function(ctx, x, y){
      
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
  },
    
  purple_box: function(ctx, x, y){
      
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
  }


};