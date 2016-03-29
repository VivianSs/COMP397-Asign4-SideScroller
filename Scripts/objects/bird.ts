module objects {
    // BIRD class +++++++++++++++++++++++++++++++++++
    export class Bird extends objects.GameObjetcs {
        //private instance variables


        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(("bird"));
            this._reset(this._rightBounds);
            this.name = "bird";
        }

        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            //check to see if the right of the cloud 
            // has outside the viewport

            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        }

        // reset the bird offscreen
        protected _reset(value: number): void {
            this._speed.x = Math.floor(Math.random() * 3) + 4;
            this._speed.y = Math.floor(Math.random() * 4) - 2;

            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }

        public update(): void {

            //scroll the bird right to left 
            this.y += this._speed.y;
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}