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

        window.requestAnimationFrame = this.frame;

        return this;
    },

    /**
     * Set element background
     *
     * @param url
     */
    setBackground: function(url)
    {
        this.element.setAttribute('style', "background:url('"+url+"') no-repeat;");
    },

    /**
     * Set element width
     *
     * @param width
     */
    setWidth: function(width)
    {
        this.element.width = width;
    },

    /**
     * Set element height
     *
     * @param height
     */
    setHeight: function(height)
    {
        this.element.height = height;
    },

    /**
     * Get element width
     */
    getWidth: function()
    {
        return this.element.width;
    },

    /**
     * Get element height
     */
    getHeight: function()
    {
        return this.element.height;
    }

};