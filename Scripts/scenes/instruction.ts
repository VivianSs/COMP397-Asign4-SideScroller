// Source Name: instruction.ts
// Author's name: Sisi Li
// Last modified: March 29, 2016
// Program description: create a module for instruction scene including the rules and guidelines
// Revision History: version 10

// INSTRUCTION SCENE
module scenes {
    export class Instruction extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _instructionLabel: objects.Label;
        private _startButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++


        // Start Method
        public start(): void {

            // added background 
            this._background = new createjs.Bitmap(assets.getResult("InstructionScene"));
            this.addChild(this._background);
            
            //Add Menu Label
            this._instructionLabel = new objects.Label(
                "INSTRUCTION", "60px Consolas",
                "#000000",
                150, 138, false);
            this.addChild(this._instructionLabel);


            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);

            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);


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

    }
}