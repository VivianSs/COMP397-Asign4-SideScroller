// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky: objects.Sky;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();


        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
           

            //added sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
       
        }



        //EVENT HANDLERS ++++++++++++++++++++

    }
}