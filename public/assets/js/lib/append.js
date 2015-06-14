var Append;
Append = {

    html: function(element, content, args){

        var obj = document.createElement(element);

        for (var m in args) obj[m] = args[m];

        document.body.appendChild(obj);

    }

};