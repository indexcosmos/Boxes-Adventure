var Canvas;
Canvas = {

    /**
     * Standardize the animation frame
     */
    frame:  window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame,

    /**
     * Create a canvas with context
     *
     * @param {string} id
     */
    init: function(id)
    {
        this.user = Math.random().toString(36).substr(2, 9);

        this.element = document.getElementById(id);

        this.context = this.element.getContext("2d");

        window.requestAnimationFrame = Canvas.frame;
    },

    /**
     * Set element background
     *
     * @param url
     */
    background: function(url){

        this.element.setAttribute('style', "background:url('"+url+"') no-repeat;");
    },

    /**
     * Set element width
     *
     * @param width
     */
    width: function(width)
    {
        this.element.width = width;
    },

    /**
     * Set element height
     *
     * @param height
     */
    height: function(height)
    {
        this.element.height = height;
    }

};