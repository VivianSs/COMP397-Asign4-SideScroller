var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GOLD class +++++++++++++++++++++++++++++++++++
    var Gold = (function (_super) {
        __extends(Gold, _super);
        //private instance variables
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        function Gold() {
            _super.call(this, ("gold"));
            this._speed.x = 6;
            this._reset(this._rightBounds);
            this.name = "gold";
        }
        // private methods+++++++++++++++++++++++++++++++++++++++++
        Gold.prototype._checkBounds = function (value) {
            //check to see if the righ of the gold 
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the gold offscreen
        Gold.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        Gold.prototype.update = function () {
            //scroll the gold 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Gold;
    })(objects.GameObjetcs);
    objects.Gold = Gold;
})(objects || (objects = {}));
//# sourceMappingURL=gold.js.map