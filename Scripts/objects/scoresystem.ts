// Source Name: bird.ts
// Author's name: Sisi Li
// Last modified: March 29, 2016
// Program description: create a super class for the  score and lifetime background image.
// Revision History: version 10
module objects {
    export class ScoreSystem extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
       
        //CONSTRUCTOR
        constructor(pathString: string, x: number, y: number) {
            super(assets.getResult(pathString));
            this.x = x;
            this.y = y;

        }

        // PRIVATE METHODS
        // Event Handler for mouse over
       

        // Event Handler for mouse out


    }
} 