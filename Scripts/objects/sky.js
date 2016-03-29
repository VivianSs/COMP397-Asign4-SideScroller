var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SKY class +++++++++++++++++++++++++++++++++++
    var Sky = (function (_super) {
        __extends(Sky, _super);
        //private instance variables
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        function Sky() {
            _super.call(this, ("sky"));
            this._speed.x = 6; // sky speed
            this._reset(0);
        }
        // private methods+++++++++++++++++++++++++++++++++++++++++
        Sky.prototype._checkBounds = function (value) {
            //check to see if the right of the ocean 
            // has met the right of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the ocean offscreen
        Sky.prototype._reset = function (value) {
            this.x = value;
        };
        Sky.prototype.update = function () {
            //scroll the sky 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-1280);
        };
        return Sky;
    })(objects.GameObjetcs);
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map