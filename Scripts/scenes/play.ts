// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky: objects.Sky;
        private _gold: objects.Gold;
        private _birds: objects.Bird[];
        private _birdCount: number;
        private _player: objects.Player;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();


        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            //set bird count
            this._birdCount = 3;

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
            });



        }



        //EVENT HANDLERS ++++++++++++++++++++

    }
}