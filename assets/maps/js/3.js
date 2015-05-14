

var map = {

  width: 900,
  height: 450,
  grid: {
    width: 1,
    height: 1
  },
  friction: 0.8,
  gravity: 0.3,
  background: "assets/maps/images/3.png",
  start_screen: "assets/maps/images/1_start.png",
  next_map: "4",

  player: {

    x: 500,
    y: 350,
    width: 38,
    height: 38,
    speed: 5,
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
      x: 106,
      y: 84,
      width: 10,
      height: 10,
      profile: "star"
    },


  ],

  home: {
    x: 786,
    y: 58,
    width: 30,
    height: 30
  }

};
