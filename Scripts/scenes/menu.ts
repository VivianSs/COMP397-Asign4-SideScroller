// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // add background
            this._background = new createjs.Bitmap(assets.getResult("MenuScene"));
            this.addChild(this._background);

            //Add Menu Label
            this._menuLabel = new objects.Label(
                "MENU SCENE", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);


            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 170,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);

            // add the instruction button to the MENU scene
            this._instructionButton = new objects.Button(
                "InstructionButton",
                config.Screen.CENTER_X + 170,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionButton);

            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // Instruction Button event listener
            this._instructionButton.on("click", this._instructionButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // LEFT_CAVE Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
        private _instructionButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.INSTRUCTION;
            changeScene();
        }

    }
}