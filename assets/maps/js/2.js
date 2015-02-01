

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
  start_screen: "assets/maps/images/2_start.png",
  next_map: "3",

  player: {

    x: 20,
    y: 20,
    width: 38,
    height: 38,
    speed: 3,
    dir: "r",
    start_profile: "box",
    finish_profile: "box"

  },

  boxes: [

    // floor
    {
      x: 0,
      y: 450 - 55,
      width: 900,
      height: 55
    },

    // first level left wall
    {
      x: 7,
      y: 282,
      width: 740,
      height: 50
    },
    // second level right wall
    {
      x: 158,
      y: 173,
      width: 740,
      height: 50
    },
    // third level left wall
    {
      x: 7,
      y: 65,
      width: 740,
      height: 50
    },


  ],

  rewards: [

    // circle
    {
      x: 669,
      y: 34,
      width: 10,
      height: 10,
      profile: "circle"
    },
    // star
    {
      x: 173,
      y: 139,
      width: 10,
      height: 10,
      profile: "star"
    },
    // box
    {
      x: 105,
      y: 360,
      width: 10,
      height: 10,
      profile: "box"
    },

  ],

  hole: {
    x: 22,
    y: 345,
    width: 40,
    height: 40
  }

};
