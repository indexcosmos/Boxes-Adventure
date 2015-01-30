
var profiles = {
  box: function(){


    Game.player.jump = 1.0;
    Game.player.double_jump = 1.0;





  },
  star: function(x,y,width,height){

    Game.player.jump = 2.0;
    Game.player.double_jump = 1.2;



  },
  circle: function(x,y,width,height){

    Game.keys[38] = true;
    Game.player.jump = 1.5;
    Game.player.double_jump = 1.2;


  }


};


var avatar = {
    
  left: function(ctx, x, y){
  
      // player_l
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+6.7, y+40.5);
      ctx.lineTo(x+40.5,y+ 40.5);
      ctx.lineTo(x+40.5,y+ 6.5);
      ctx.lineTo(x+6.7, y+6.5);
      ctx.lineTo(x+6.7, y+40.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(159, 117, 85)";
      ctx.fill();
      ctx.strokeStyle = "rgb(82, 53, 24)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+0.5, y+34.5);
      ctx.lineTo(x+6.7, y+40.5);
      ctx.lineTo(x+6.7, y+6.5);
      ctx.lineTo(x+0.5, y+0.5);
      ctx.lineTo(x+0.5, y+34.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+1.0, y+14.8);
      ctx.bezierCurveTo(x+1.0, y+16.1, x+1.4, y+17.2, x+2.0, y+17.2);
      ctx.bezierCurveTo(x+2.5, y+17.2, x+3.0, y+16.1, x+3.0, y+14.8);
      ctx.bezierCurveTo(x+3.0, y+13.5, x+2.5, y+12.4, x+2.0, y+12.4);
      ctx.bezierCurveTo(x+1.4, y+12.4, x+1.0, y+13.5, x+1.0, y+14.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(82, 53, 24)";
      ctx.fill();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+3.4, y+17.2);
      ctx.bezierCurveTo(x+3.4, y+18.7, x+3.9, y+19.9, x+4.6, y+19.9);
      ctx.bezierCurveTo(x+5.2, y+19.9, x+5.8, y+18.7, x+5.8, y+17.2);
      ctx.bezierCurveTo(x+5.8, y+15.7, x+5.2, y+14.4, x+4.6, y+14.4);
      ctx.bezierCurveTo(x+3.9, y+14.4, x+3.4, y+15.7, x+3.4, y+17.2);
      ctx.closePath();
      ctx.fill();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+6.7, y+6.5);
      ctx.lineTo(x+40.5,y+ 6.5);
      ctx.lineTo(x+34.3,y+ 0.5);
      ctx.lineTo(x+0.5, y+0.5);
      ctx.lineTo(x+6.7, y+6.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+36.8,y+ 2.9);
      ctx.lineTo(x+3.3, y+2.9);
      ctx.stroke();
      ctx.restore();
  
  },
    
  right: function(ctx, x, y){
  
      // player_r
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+34.3, y+ 40.5);
      ctx.lineTo(x+0.5,  y+40.5);
      ctx.lineTo(x+0.5,  y+6.5);
      ctx.lineTo(x+34.3, y+ 6.5);
      ctx.lineTo(x+34.3, y+ 40.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(159, 117, 85)";
      ctx.fill();
      ctx.strokeStyle = "rgb(82, 53, 24)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+40.5, y+ 34.5);
      ctx.lineTo(x+34.3, y+ 40.5);
      ctx.lineTo(x+34.3, y+ 6.5);
      ctx.lineTo(x+40.5, y+ 0.5);
      ctx.lineTo(x+40.5, y+ 34.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+40.0, y+ 14.8);
      ctx.bezierCurveTo(x+40.0, y+ 16.1, x+39.6, y+ 17.2, x+39.0, y+ 17.2);
      ctx.bezierCurveTo(x+38.5, y+ 17.2, x+38.0, y+ 16.1, x+38.0, y+ 14.8);
      ctx.bezierCurveTo(x+38.0, y+ 13.5, x+38.5, y+ 12.4, x+39.0, y+ 12.4);
      ctx.bezierCurveTo(x+39.6, y+ 12.4, x+40.0, y+ 13.5, x+40.0, y+ 14.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(82, 53, 24)";
      ctx.fill();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+37.6, y+ 17.2);
      ctx.bezierCurveTo(x+37.6, y+ 18.7, x+37.1, y+ 19.9, x+36.4, y+ 19.9);
      ctx.bezierCurveTo(x+35.8, y+ 19.9, x+35.2, y+ 18.7, x+35.2, y+ 17.2);
      ctx.bezierCurveTo(x+35.2, y+ 15.7, x+35.8, y+ 14.4, x+36.4, y+ 14.4);
      ctx.bezierCurveTo(x+37.1, y+ 14.4, x+37.6, y+ 15.7, x+37.6, y+ 17.2);
      ctx.closePath();
      ctx.fill();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+34.3, y+ 6.5);
      ctx.lineTo(x+0.5,  y+6.5);
      ctx.lineTo(x+6.7,  y+0.5);
      ctx.lineTo(x+40.5, y+ 0.5);
      ctx.lineTo(x+34.3, y+ 6.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer19/Path
      ctx.beginPath();
      ctx.moveTo(x+4.2,  y+2.9);
      ctx.lineTo(x+37.7, y+ 2.9);
      ctx.stroke();
      ctx.restore();
      
  },
    
    
  down_left: function(ctx, x, y){
  
      // player_down_l
      y+=6;
       ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+2.5, y+29.5);
      ctx.lineTo(x+36.3, y+29.5);
      ctx.lineTo(x+34.3, y+0.5);
      ctx.lineTo(x+0.5, y+0.5);
      ctx.lineTo(x+2.5, y+29.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(205, 215, 126)";
      ctx.fill();
      ctx.strokeStyle = "rgb(82, 53, 24)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+8.7, y+35.5);
      ctx.lineTo(x+42.5, y+35.5);
      ctx.lineTo(x+40.5, y+6.5);
      ctx.lineTo(x+6.7, y+6.5);
      ctx.lineTo(x+8.7, y+35.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(159, 117, 85)";
      ctx.fill();
      ctx.stroke();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+2.5, y+29.5);
      ctx.lineTo(x+8.7, y+35.5);
      ctx.lineTo(x+6.7, y+6.5);
      ctx.lineTo(x+0.5, y+0.5);
      ctx.lineTo(x+2.5, y+29.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+2.0, y+12.8);
      ctx.bezierCurveTo(x+2.0, y+14.1, x+2.4, y+15.2, x+3.0, y+15.2);
      ctx.bezierCurveTo(x+3.5, y+15.2, x+4.0, y+14.1, x+4.0, y+12.8);
      ctx.bezierCurveTo(x+4.0, y+11.5, x+3.5, y+10.4, x+3.0, y+10.4);
      ctx.bezierCurveTo(x+2.4, y+10.4, x+2.0, y+11.5, x+2.0, y+12.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(82, 53, 24)";
      ctx.fill();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+4.4, y+15.2);
      ctx.bezierCurveTo(x+4.4, y+16.7, x+4.9, y+17.9, x+5.6, y+17.9);
      ctx.bezierCurveTo(x+6.2, y+17.9, x+6.8, y+16.7, x+6.8, y+15.2);
      ctx.bezierCurveTo(x+6.8, y+13.7, x+6.2, y+12.4, x+5.6, y+12.4);
      ctx.bezierCurveTo(x+4.9, y+12.4, x+4.4, y+13.7, x+4.4, y+15.2);
      ctx.closePath();
      ctx.fill();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+6.7, y+6.5);
      ctx.lineTo(x+40.5, y+6.5);
      ctx.lineTo(x+34.3, y+0.5);
      ctx.lineTo(x+0.5, y+0.5);
      ctx.lineTo(x+6.7, y+6.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+36.8, y+2.9);
      ctx.lineTo(x+3.3, y+2.9);
      ctx.stroke();
      ctx.restore();
    
  },
  down_right: function(ctx, x, y){
      
      // player_down_r
     
      y+=6;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+34.3, y+35.5);
      ctx.lineTo(x+0.5, y+35.5);
      ctx.lineTo(x+2.5, y+6.5);
      ctx.lineTo(x+36.3, y+6.5);
      ctx.lineTo(x+34.3, y+35.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(159, 117, 85)";
      ctx.fill();
      ctx.strokeStyle = "rgb(82, 53, 24)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+40.6, y+29.5);
      ctx.lineTo(x+34.4, y+35.5);
      ctx.lineTo(x+36.4, y+6.5);
      ctx.lineTo(x+42.6, y+0.5);
      ctx.lineTo(x+40.6, y+29.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+41.1, y+12.8);
      ctx.bezierCurveTo(x+41.1, y+14.1, x+40.6, y+15.2, x+40.1, y+15.2);
      ctx.bezierCurveTo(x+39.5, y+15.2, x+39.1, y+14.1, x+39.1, y+12.8);
      ctx.bezierCurveTo(x+39.1, y+11.5, x+39.5, y+10.4, x+40.1, y+10.4);
      ctx.bezierCurveTo(x+40.6, y+10.4, x+41.1, y+11.5, x+41.1, y+12.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(82, 53, 24)";
      ctx.fill();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+38.7, y+15.2);
      ctx.bezierCurveTo(x+38.7, y+16.7, x+38.1, y+17.9, x+37.5, y+17.9);
      ctx.bezierCurveTo(x+36.8, y+17.9, x+36.3, y+16.7, x+36.3, y+15.2);
      ctx.bezierCurveTo(x+36.3, y+13.7, x+36.8, y+12.4, x+37.5, y+12.4);
      ctx.bezierCurveTo(x+38.1, y+12.4, x+38.7, y+13.7, x+38.7, y+15.2);
      ctx.closePath();
      ctx.fill();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+36.4, y+6.5);
      ctx.lineTo(x+2.6, y+6.5);
      ctx.lineTo(x+8.8, y+0.5);
      ctx.lineTo(x+42.6, y+0.5);
      ctx.lineTo(x+36.4, y+6.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(181, 138, 108)";
      ctx.fill();
      ctx.stroke();

      // layer26/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+6.3, y+2.9);
      ctx.lineTo(x+39.8, y+2.9);
      ctx.stroke();
      ctx.restore();
      
  }
    
    
};