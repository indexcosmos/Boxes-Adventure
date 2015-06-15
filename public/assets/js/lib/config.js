var Config;
Config = {

    _loaded: false,

    config: [],

    get: function(file, key){

        if(!key){

            return this.config[file];

        }

        return this.config[file][key];

    },

    preload: function(file, callback) {

        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");

        xobj.open('GET', file, true);

        xobj.onreadystatechange = function () {

            if (xobj.readyState == 4 && xobj.status == "200") {

                var response = JSON.parse(xobj.responseText);

                Config._save(file, response);

                callback(response);

            }

        };

        xobj.send(null);
    },

    _save: function(file, json) {

        this.config[file] = json;

    }

};