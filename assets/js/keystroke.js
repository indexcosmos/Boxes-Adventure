var Keystroke;
Keystroke = {

    up: function(callback)
    {
        document.body.addEventListener("keyup", callback);
    },

    down: function(callback)
    {
        document.body.addEventListener("keydown", callback);
    }

};