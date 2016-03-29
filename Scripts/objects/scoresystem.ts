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