module objects {
    // GameObjetcs super class +++++++++++++++++++++++++++++++++++
    export class GameObjetcs extends createjs.Bitmap {
        //private instance variables
        protected _speed: createjs.Point;
        protected _leftBounds: number;
        protected _rightBounds: number;
        protected _bottomBounds: number;
        protected _topBounds: number;

        // public instance variables
        public name: string;
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;

        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapString: string) {
            super(assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);

        }

        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            var resetValue: number = 0;
            //check if x value has met the reset criteria
            if (this.x <= value) {
                this._reset(resetValue);
            }
        }

        // reset the Objects offscreen
        protected _reset(value: number): void {
            this.x = value;
        }

        public update(): void {
            var boundVaule: number = this.width;
            //scroll the  5 px per frame
            this.x += this._speed.x;
            this._checkBounds(boundVaule);
        }
    }
}