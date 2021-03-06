// Source Name: gold.ts
// Author's name: Sisi Li
// Last modified: March 29, 2016
// Program description: create a gold module as points to collect in the game
// Revision History: version 10
module objects {
    // GOLD class +++++++++++++++++++++++++++++++++++
    export class Gold extends objects.GameObjetcs {
        //private instance variables


        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(("gold"));

            this._speed.x = 4;
            this._reset(this._rightBounds);
            this.name = "gold";
        }

        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            //check to see if the righ of the gold 
            // has outside the viewport

            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        }

        // reset the gold offscreen
        protected _reset(value: number): void {
           
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }

        public update(): void {

            //scroll the gold 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}