

var map = {

  width: 900,
  height: 450,
  friction: 0.8,
  gravity: 0.3,
  background: "assets/maps/images/3.png",
  start_screen: "assets/maps/images/3_start.png",
  next_map: "4",

  player: {

    x: 500,
    y: 350,
    width: 38,
    height: 38,
    speed: 3,
    dir: "l",
    start_profile: "box",
    finish_profile: "star",
    rez_limit: 4

  },

  boxes: [

    // floor
    {
      x: 0,
      y: 450 - 55,
      width: 900,
      height: 55
    },


    // box 1
    {
      x: 600,
      y: 115,
      width: 297,
      height: 48
    },
      
        // box 2
    {
      x: 3,
      y: 115,
      width: 300,
      height: 48
    },
      

  ],

  rewards: [

    // square
    {
      x: 104,
      y: 360,
      width: 10,
      height: 10,
      profile: "square"
    },
         // star
    {
      x: 48,
      y: 79,
      width: 10,
      height: 10,
      profile: "star"
    },


  ],

  hole: {
    x: 822,
    y: 65,
    width: 40,
    height: 40
  }

};
