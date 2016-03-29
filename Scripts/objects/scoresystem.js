var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var ScoreSystem = (function (_super) {
        __extends(ScoreSystem, _super);
        //PRIVATE INSTANCE VARIABLES
        //CONSTRUCTOR
        function ScoreSystem(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
        }
        return ScoreSystem;
    })(createjs.Bitmap);
    objects.ScoreSystem = ScoreSystem;
})(objects || (objects = {}));
//# sourceMappingURL=scoresystem.js.map