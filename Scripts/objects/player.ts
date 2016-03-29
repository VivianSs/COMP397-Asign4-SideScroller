module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // private instance variables
        private _topBounds: number;
        private _bottomBounds: number;
       
        // public instance variables
        public width: number;
        public height: number;

        constructor() {
            super(assets.getResult("plane"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 68;
        }

        // private methods +++++++++++++++++++++++++++
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }

        // public methods+++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY;

            this._checkBounds();
        }
    }
}