

var map = {

  width: 900,
  height: 450,
  grid: {
    width: 1,
    height: 1
  },
  friction: 0.8,
  gravity: 0.3,
  background: "assets/maps/images/2.png",
  start_screen: "assets/maps/images/1_start.png",
  next_map: "3",

  player: {

    x: 20,
    y: 20,
    width: 38,
    height: 38,
    speed: 5,
    dir: "r",
    start_profile: "box",
    finish_profile: "box"

  },

  boxes: [
      
    // top left wall
    {
      x: 7,
      y: 65,
      width: 460,
      height: 50
    },
      
    // top right wall
    {
      x: 158,
      y: 173,
      width: 590,
      height: 50
    },
      
    // box 1
    {
      x: 750,
      y: 134,
      width: 50,
      height: 50
    },
      
    // box 2
    {
      x: 792,
      y: 88,
      width: 50,
      height: 50
    },
    
    // box 
    {
      x: 838,
      y: 39,
      width: 50,
      height: 50
    },
    
    // second left wall
    {
      x: 7,
      y: 282,
      width: 590,
      height: 50
    },
      
    // floor
    {
      x: 0,
      y: 450 - 55,
      width: 900,
      height: 55
    },






  ],

  rewards: [

    // circle
    {
      x: 765,
      y: 34,
      width: 10,
      height: 10,
      profile: "circle"
    },
    // star
    {
      x: 748,
      y: 333,
      width: 10,
      height: 10,
      profile: "star"
    },

  ],

  home: {
    x: 39,
    y: 350,
    width: 30,
    height: 30
  }

};
