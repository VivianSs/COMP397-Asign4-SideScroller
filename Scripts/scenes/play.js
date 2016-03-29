var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //set bird count
            this._birdCount = 3;
            //instantiate bird array
            this._birds = new Array();
            //added sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            // added gold to the scene
            this._gold = new objects.Gold();
            this.addChild(this._gold);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added bird to the scene
            for (var bird = 0; bird < this._birdCount; bird++) {
                this._birds[bird] = new objects.Bird();
                this.addChild(this._birds[bird]);
            }
            // adder collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._sky.update();
            this._gold.update();
            this._player.update();
            this._birds.forEach(function (bird) {
                bird.update();
                _this._collision.check(bird);
            });
            this._collision.check(this._gold);
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map