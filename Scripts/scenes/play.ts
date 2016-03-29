// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky: objects.Sky;
        private _gold: objects.Gold;
        private _birds: objects.Bird[];
        private _birdCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;

        private _scoreLabel: objects.ScoreSystem;
        private _lifeLabel: objects.ScoreSystem;
        public _scoreText: objects.Label;         
        public _lifeText: objects.Label;
       

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();


        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {


            //set bird count
            this._birdCount = 4;

            //instantiate bird array
            this._birds = new Array<objects.Bird>();

            //added sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);

            // added gold to the scene
            this._gold = new objects.Gold();
            this.addChild(this._gold);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // added bird to the scene
            for (var bird: number = 0; bird < this._birdCount; bird++) {
                this._birds[bird] = new objects.Bird();
                this.addChild(this._birds[bird]);
            }

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // added score label to the scene
            this._scoreLabel = new objects.ScoreSystem("ScoreLabel", 0, 0);
            this.addChild(this._scoreLabel);

            //added life label to the scene
            this._lifeLabel = new objects.ScoreSystem("LifeLabel", 255, 4);
            this.addChild(this._lifeLabel);

            // added score text to the scene
            this._scoreText = new objects.Label("0",
                "18px Consolas", "#FFCC00",
                66, 13, false);
            this.addChild(this._scoreText);

            // added life text to the scene
            this._lifeText = new objects.Label("0",
                "18px Consolas", "#FFCC00",
                320, 13, false);
            this.addChild(this._lifeText);



            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
            this._gold.update();
            this._player.update();

            this._birds.forEach(bird => {
                bird.update();
            this._collision.check(bird);
            if(this._collision.check(bird) <= 0)
            {
                scene = config.Scene.END;
                changeScene();
            }      
            });
            
            this._collision.check(this._gold) ;
                
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}