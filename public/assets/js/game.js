var Game;
Game = {

    keys: [],
    config: {
        background: null,
        start_screen: null,
        size: 1,
        width: null,
        height: null,
        friction: null,
        gravity: null,
        rewards: {},
        home: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            color: 'black'
        },
        player: {
            dir: "l",
            collide: 0,
            start_profile: null,
            finish_profile: null,
            profile: 'box',
            crouching: false,
            velX: 0,
            velY: 0,
            jump: 2.0,
            rez_limit: 0,
            double_jump: 1.2,
            jumping: false,
            grounded: false,
            x: 0,
            y: 0
        },
        camera: {
            x: 0,
            y: 0
        }
    },

    /**
     * Set up the game's services and properties
     */
    init: function(canvas)
    {
        Client.init('ws://localhost:8081');

        Canvas.init(canvas);

        Map.init();

        Property.init();

        Player.init();

        Rewards.init();

        Avatar.init(Helper.random(32));
    },

    /**
     * Load config
     *
     * @param config
     * @param next
     */
    load: function(config, next)
    {
        // save the next level
        this.config.next = next;

        // merge default config
        this.config = Helper.mergeConfig(this.config, config);

        // set canvas size
        Canvas.setWidth(this.config.width);
        Canvas.setHeight(this.config.height);

        // set start screen
        Canvas.setBackground(this.config.start_screen);

        // click to start
        Dispatcher.add('load', 'mousedown', function(){
            Game.start();
        });
    },

    /**
     * Game is starting
     */
    start: function()
    {
        // remove click to start
        Dispatcher.remove('load');

        // open web socket connection
        Client.listen(Game.request);

        // start listening to keystrokes
        Keystroke.down(function(e){Game.keys[e.keyCode] = true;});
        Keystroke.up(function(e){Game.keys[e.keyCode] = false;});

        // set the map background
        Canvas.setBackground(this.config.background);

        // set the player's position relative to the map size
        this.config.player.x /= Map.size;

        // move the camera to the player
        this.config.camera.x = this.config.player.x;

        // set the player's speed relative to the map size
        this.config.player.speed /= Map.size;

        // Call update to start animation
        Game.update();
    },

    update: function()
    {
        Canvas.context.clearRect(0, 0, Canvas.getWidth(), Canvas.getHeight());

        Dispatcher.dispatch('before.update', {config: Game.config, context: Canvas.context});

        // update game config based on user input
        Game._update();

        Dispatcher.dispatch('after.update', {config: Game.config, context: Canvas.context});

        // update the canvas
        var frame = Canvas.frame;

        frame(Game.update);
    },

    /**
     * Request was received from game server
     *
     * @param response
     */
    request: function(response)
    {
        Dispatcher.dispatch('request', response);
    },

    /**
     * Update the player movements
     *
     * @private
     */
    _update: function()
    {
        this.config.player.crouching = false;

        // down arrow
        if (this.keys[40] || this.keys[83]) {
            this.config.player.crouching = true;
        }

        // up arrow or space
        if (this.keys[38] || this.keys[32] || this.keys[87]) {
            if (!this.config.player.jumping) {
                this.config.player.jumping = true;
                var jump = this.config.player.double_jump;
                if(this.config.player.grounded){
                    jump = this.config.player.jump;
                }
                this.config.player.grounded = false;
                this.config.player.velY = -(this.config.player.speed * Map.size) * jump;
            }
        }

        if (!this.config.player.collide) {

            var speed = this.config.player.speed;

            if(this.config.camera.locked) speed *= Map.size;

            // right arrow
            if (this.keys[39] || this.keys[68]) {

                if (this.config.player.velX < speed) {
                    this.config.player.velX += speed * 0.1;
                }
                this.config.player.dir = 'r';
            }

            // left arrow
            if (this.keys[37] || this.keys[65]) {

                if (this.config.player.velX > -speed) {
                    this.config.player.velX -= speed * 0.1;
                }
                this.config.player.dir = 'l';
            }

            this.config.player.velX *= this.config.friction;
            this.config.player.velY += this.config.gravity;

        }

        if(this.config.player.grounded){
            this.config.player.velY = 0;
        }


        this.config.player.x += this.config.player.velX;
        this.config.player.y += this.config.player.velY;

        this.config.camera.x = Math.floor(this.config.player.x);

        if(this.config.camera.x > Map.size){
            this.config.camera.x = Map.size;
        } else if(this.config.camera.x < 0){
            this.config.camera.x = 0;
        }
    }

};