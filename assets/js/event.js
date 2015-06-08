var Event;
Event = {

    /**
     * @param {Object}
     */
    events: [],

    /**
     * Add events to window
     *
     * @param {string} event
     * @param {string} type
     * @param {Function} listener
     */
    add: function(event, type, listener){

        this.events[event] = listener;

        window.addEventListener(type, this.events[event]);

    },

    /**
     * Remove events from window
     *
     * @param {string} event
     */
    remove: function(event){

        delete this.events[event];

    }

};