var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GameObjetcs super class +++++++++++++++++++++++++++++++++++
    var GameObjetcs = (function (_super) {
        __extends(GameObjetcs, _super);
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        function GameObjetcs(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
        }
        // private methods+++++++++++++++++++++++++++++++++++++++++
        GameObjetcs.prototype._checkBounds = function (value) {
            var resetValue = 0;
            //check if x value has met the reset criteria
            if (this.x <= value) {
                this._reset(resetValue);
            }
        };
        // reset the Objects offscreen
        GameObjetcs.prototype._reset = function (value) {
            this.x = value;
        };
        GameObjetcs.prototype.update = function () {
            var boundVaule = this.width;
            //scroll the  5 px per frame
            this.x += this._speed.x;
            this._checkBounds(boundVaule);
        };
        return GameObjetcs;
    })(createjs.Bitmap);
    objects.GameObjetcs = GameObjetcs;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjects.js.map