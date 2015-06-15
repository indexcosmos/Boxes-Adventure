var Helper;
Helper = {

    /**
     * Count elements in json object
     *
     * @param obj
     * @returns {number}
     */
    count: function(obj)
    {
        var count = 0;

        for(key in obj){

            if(obj.hasOwnProperty(key)) count++;

        }

        return count;
    },

    /**
     * Get parameter type
     *
     * @param obj
     * @returns {string}
     */
    toType: function(obj)
    {
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    },

    /**
     * Merge two objects recursively
     *
     * @param obj1
     * @param obj2
     * @returns {{}}
     */
    mergeConfig: function(obj1, obj2)
    {
        if(typeof obj1 == 'undefined') return obj2;

        for(var m in obj2){

            var value = obj2[m];

            if(value && typeof value == 'object'){

                value = Helper.mergeConfig(obj1[m], value);

            }

            obj1[m] = value;

        }

        return obj1;
    },

    /**
     * Get a random string
     *
     * @param length
     * @returns {string}
     */
    random: function(length)
    {
        var timestamp = +new Date;

        var parts = timestamp.toString().split("").reverse();

        var id = "";

        for (var i = 0; i < length; ++i) {

            var index = Math.floor(Math.random() * parts.length);

            id += parts[index];

        }

        return id;
    },

    /**
     * Check for collisions
     *
     * @param shapeA
     * @param shapeB
     * @param colide
     * @returns {*}
     */
    colCheck: function(shapeA, shapeB, colide)
    {
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
    }

};