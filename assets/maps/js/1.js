

var map = {

  width: 900,
  height: 450,
  grid: {
    width: 1,
    height: 1
  },
  friction: 0.8,
  gravity: 0.3,
  background: "assets/maps/images/1.png",
  start_screen: "assets/maps/images/1_start.png",
  next_map: "2",

  player: {

    x: 500,
    y: 350,
    width: 38,
    height: 38,
    speed: 5,
    dir: "l",
    start_profile: "box",
    finish_profile: "circle"

  },

  boxes: [

    // floor
    {
      x: 0,
      y: 450 - 55,
      width: 900,
      height: 55
    },

    // left wall
    {
      x: 0,
      y: 0,
      width: 55,
      height: 450
    },
    // right wall
    {
      x: 900 - 55,
      y: 0,
      width: 55,
      height: 450
    },
    // box 1
    {
      x: 325,
      y: 345,
      width: 50,
      height: 50
    },

    // box 2
    {
      x: 231,
      y: 270,
      width: 50,
      height: 50
    },

    // box 3
    {
      x: 328,
      y: 209,
      width: 50,
      height: 50
    },

      // box 4
    {
      x: 477,
      y: 140,
      width: 50,
      height: 50
    },

    // box 5
    {
      x: 631,
      y: 140,
      width: 195,
      height: 48
    },


  ],

  rewards: [

    // star
    {
      x: 275,
      y: 161,
      width: 10,
      height: 10,
      profile: "star"
    },

    // circle
    {
      x: 571,
      y: 75,
      width: 10,
      height: 10,
      profile: "circle"
    },


  ],

  hole: {
    x: 752,
    y: 87,
    width: 40,
    height: 40
  }

};
