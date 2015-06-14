var Avatar;
Avatar = {

    id: null,

    init: function(id)
    {
        this.id = id;
    },

    _locations: {

        _x: 0,

        _y: 0,

        x: function (x) {

            var difference = Avatar._locations.difference(Avatar._locations._x, x);

            Avatar._locations._x = x;

            return difference;

        },

        y: function (y) {

            var difference = Avatar._locations.difference(Avatar._locations._y, y);

            Avatar._locations._y = y;

            return difference;

        },

        difference: function (a, b) {

            return Math.abs(a - b);

        }

    },

    _report: function(dir, x, y){

        if(Avatar._locations.x(x) > 0.5 || Avatar._locations.y(y) > 0.5){

            Client.getConnection().send(JSON.stringify({sig: this.id, dir: dir, x: x, y: y}));

        }

    }

};