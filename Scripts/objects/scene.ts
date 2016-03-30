// Source Name: scene.ts
// Author's name: Sisi Li
// Last modified: March 29, 2016
// Program description: create a super class for all the scenes
// Revision History: version 10
module objects {
    // Scene Class
    export class Scene extends createjs.Container {
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start():void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update():void {
            
        }
    }
}