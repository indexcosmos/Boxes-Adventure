var Dispatcher;
Dispatcher = {

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
    add: function(event, type, listener)
    {
        this.events[event] = listener;

        document.addEventListener(type, this.events[event]);
    },

    /**
     * Remove events from window
     *
     * @param {string} event
     */
    remove: function(event, type)
    {
        document.removeEventListener(type, this.events[event]);

        delete this.events[event];
    },

    /**
     * Dispatch an event
     *
     * @param event
     * @param params
     */
    dispatch: function(event, params)
    {
        if(this.events[event]){

            var payload = {detail: params};

            var custom_event = new CustomEvent(event, payload);

            document.dispatchEvent(custom_event);

        }
    }

};