

var map = {

  width: 900,
  height: 450,
  friction: 0.8,
  gravity: 0.3,

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

    // star
    {
      x: 62,
      y: 77,
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
