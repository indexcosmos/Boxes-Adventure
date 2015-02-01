

var Game = {

  hole_color: "transparent",
  box_color: "transparent",
  reward_color: "transparent",

  canvas: null,
  ctx: null,
  keys: [],
  boxes: [],
  rewards: [],
  hole: null,
  player: {
    dir: "l",
    crouching: false,
    velX: 0,
    velY: 0,
    jump: 2.0,
    rez_limit: 0,
    double_jump: 1.2,
    jumping: false,
    grounded: false,
  },

  init: function(canvas){

    canvas.addEventListener("mousedown", Game.click, false);

    this.canvas = canvas;
      
    this.ctx = canvas.getContext("2d");
      
  },

  start_screen: function(){
      
      //called once to create start screen    
      Game.set_background(this.map.start_screen);
    
  },
    
  start: function(){
      
    this.canvas.width = map.width;
    this.canvas.height = map.height;
    this.friction = map.friction;
    this.gravity = map.gravity;
    this.player.x = map.player.x;
    this.player.y = map.player.y;
    this.player.dir = map.player.dir;
    this.player.width = map.player.width;
    this.player.height = map.player.height;
    this.player.speed = map.player.speed;
    this.player.profile = map.player.start_profile;
    this.player.win = map.player.finish_profile;

    this.map = map;
    this.boxes = map.boxes;
    this.rewards = map.rewards;
    this.hole = map.hole;
  
      //called once to clean up start screen
      Game.set_background(this.map.background);
  
  },
    
  set_background: function(background){
  
     this.canvas.setAttribute('style', "background:url('"+background+"') no-repeat;");
  },
    
  update: function() {

    Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

    Game.ctx.beginPath();

    // draw inanimate boxes
    Game.draw_boxes();

    // draw rewards
    Game.draw_rewards();

    // draw rezzables
    Game.draw_rezzables();

    //draw_hole
    Game.draw_hole();

    Game.handle_keystrokes();

    profiles[Game.player.profile](this.map);

    Game.draw_player(Game.player.x, Game.player.y, Game.player.width, Game.player.height);

    requestAnimationFrame(Game.update);
  },
    
    click: function(event)
    {
        if(Game.player.rez_limit > 0){
            
            Game.player.rez_limit--;
            
            rezzed.push({        

                type: 'blue_box',
                x: event.pageX,
                y: event.pageY,

            });

        }
        
    },
    
    collide: function(dir)
    {
        
      if (dir === "l" || dir === "r") {
        Game.player.velX = 0;
        Game.player.jumping = false;
      } else if (dir === "b") {
        Game.player.grounded = true;
        Game.player.jumping = false;
      } else if (dir === "t") {
        Game.player.velY *= -1;
      } 
        
    },

  draw_hole: function(){

    Game.ctx.fillStyle = Game.hole_color;

    Game.ctx.fillRect(Game.hole.x, Game.hole.y, Game.hole.width, Game.hole.height);

    var dir = Game.colCheck(Game.player, Game.hole, false);

    if(typeof dir == "string" && Game.player.profile == Game.player.win){

      window.location = "?map="+this.map.next_map;

    }

  },
    
  draw_rezzables: function(){
      
    for (var m in rezzed) {

        var x = rezzed[m].x;
        var y = rezzed[m].y;
        //var velX = rezzed[m].velX;
        //var velY = rezzed[m].velY;

        var coordinates = rezzables[rezzed[m]['type']](Game.ctx, x, y);

        if(coordinates){

            var dir = Game.colCheck(Game.player, coordinates, true);

            Game.collide(dir);

        }
    }      
      
      
  },

  draw_boxes: function(){

    Game.player.grounded = false;

    Game.ctx.fillStyle = Game.box_color;

    for (var i = 0; i < Game.boxes.length; i++) {

      Game.ctx.fillRect(Game.boxes[i].x, Game.boxes[i].y, Game.boxes[i].width, Game.boxes[i].height);

      var dir = Game.colCheck(Game.player, Game.boxes[i], true);

      Game.collide(dir);

    }
  },
 
  draw_rewards: function(){

    Game.ctx.fillStyle = Game.reward_color;

    for (var i = 0; i < Game.rewards.length; i++) {

      Game.ctx.fillRect(Game.rewards[i].x, Game.rewards[i].y, Game.rewards[i].width, Game.rewards[i].height);

      var dir = Game.colCheck(Game.player, Game.rewards[i], false);

      if(typeof dir == "string"){

        Game.player.profile = Game.rewards[i].profile;

      }

    }
  },

  draw_player: function(x, y, width, height){

    var ctx = Game.ctx;

    if(Game.player.dir == 'l'){

        if(Game.player.crouching){
            
            avatar.down_left(ctx, x, y);
            
        } else {
            
            avatar.left(ctx, x, y);      
            
        }
    
    } else if(Game.player.dir == 'r'){

        if(Game.player.crouching){
            
            avatar.down_right(ctx, x, y);
            
        } else {
            
            avatar.right(ctx, x, y);      
            
        }
    }   
      
  },

  colCheck: function(shapeA, shapeB, colide) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
    vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
    // add the half widths and half heights of the objects
    hWidths = (shapeA.width / 2) + (shapeB.width / 2),
    hHeights = (shapeA.height / 2) + (shapeB.height / 2),
    colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      // figures out on which side we are colliding (top, bottom, left, or right)
      var oX = hWidths - Math.abs(vX),
      oY = hHeights - Math.abs(vY);
      if (oX >= oY) {
        if (vY > 0) {
          colDir = "t";
          if(colide) shapeA.y += oY;
        } else {
          colDir = "b";
          if(colide) shapeA.y -= oY;
        }
      } else {
        if (vX > 0) {
          colDir = "l";
          if(colide) shapeA.x += oX;
        } else {
          colDir = "r";
          if(colide) shapeA.x -= oX;
        }
      }
    }
    return colDir;
  },

  handle_keystrokes: function(){
      
    Game.player.crouching = false;
    
    // down arrow
    if (Game.keys[40] || Game.keys[83]) {
        Game.player.crouching = true;
    }

    // up arrow or space
    if (Game.keys[38] || Game.keys[32] || Game.keys[87]) {
      if (!Game.player.jumping) {
        Game.player.jumping = true;
        var jump = Game.player.double_jump;
        if(Game.player.grounded){
          jump = Game.player.jump;
        }
        Game.player.grounded = false;
        Game.player.velY = -Game.player.speed * jump;
      }
    }
      
    // right arrow
    if (Game.keys[39] || Game.keys[68]) {
      
      if (Game.player.velX < Game.player.speed) {
        Game.player.velX++;
      }
      Game.player.dir = 'r';
    }
      
    // left arrow
    if (Game.keys[37] || Game.keys[65]) {
      
      if (Game.player.velX > -Game.player.speed) {
        Game.player.velX--;
      }
      Game.player.dir = 'l';
    }

    Game.player.velX *= Game.friction;
    Game.player.velY += Game.gravity;

    if(Game.player.grounded){
      Game.player.velY = 0;
    }

    Game.player.x += Game.player.velX;
    Game.player.y += Game.player.velY;
  }

};


(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
