// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        private _finalScore: objects.ScoreSystem;
        private _playScene: scenes.Play
        private _score: objects.Label;
        private _player: objects.Player;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            // add background
            this._background = new createjs.Bitmap(assets.getResult("MenuScene"));
            this.addChild(this._background);

            //Add Menu Label
            this._endLabel = new objects.Label(
                "END SCENE", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 30, true);
            this.addChild(this._endLabel);

            // add final score to the scene
            this._finalScore = new objects.ScoreSystem("ScoreLabel",
                210,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._finalScore);

            //add final score       
            this._playScene = new scenes.Play();
            this._score = new objects.Label(this._playScene.update().toString(),
                "18px Consolas",
                "#FFCC00", 279, 310, false);
            this.addChild(this._score);


            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);

            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}