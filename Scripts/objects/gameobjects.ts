// Source Name: gameobjects
// Author's name: Sisi Li
// Last modified: March 29, 2016
// Program description: create a super class for the bird object and gold object 
// Revision History: version 10
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
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = 0;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH + this.width;

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