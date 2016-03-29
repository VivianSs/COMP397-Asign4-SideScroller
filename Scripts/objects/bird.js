var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BIRD class +++++++++++++++++++++++++++++++++++
    var Bird = (function (_super) {
        __extends(Bird, _super);
        //private instance variables
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        function Bird() {
            _super.call(this, ("bird"));
            this._reset(this._rightBounds);
            this.name = "bird";
        }
        // private methods+++++++++++++++++++++++++++++++++++++++++
        Bird.prototype._checkBounds = function (value) {
            //check to see if the right of the cloud 
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the bird offscreen
        Bird.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 3) + 4;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        Bird.prototype.update = function () {
            //scroll the bird right to left 
            this.y += this._speed.y;
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Bird;
    })(objects.GameObjetcs);
    objects.Bird = Bird;
})(objects || (objects = {}));
//# sourceMappingURL=bird.js.map