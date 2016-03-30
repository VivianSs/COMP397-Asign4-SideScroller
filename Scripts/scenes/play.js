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
            this._finalScore = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //set bird count
            this._birdCount = 4;
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
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // added score label to the scene
            this._scoreLabel = new objects.ScoreSystem("ScoreLabel", 0, 0);
            this.addChild(this._scoreLabel);
            //added life label to the scene
            this._lifeLabel = new objects.ScoreSystem("LifeLabel", 255, 4);
            this.addChild(this._lifeLabel);
            // added score text to the scene
            this._scoreText = new objects.Label(this._collision._score.toString(), "18px Consolas", "#FFCC00", 66, 13, false);
            this.addChild(this._scoreText);
            // added life text to the scene
            this._lifeText = new objects.Label(this._collision._lifeCount.toString(), "18px Consolas", "#FFCC00", 320, 13, false);
            this.addChild(this._lifeText);
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
                if (parseInt(_this._collision.check(bird)) <= 0) {
                    scene = config.Scene.END;
                    changeScene();
                }
            });
            this._collision.check(this._gold);
            this._lifeText.text = this._collision._lifeCount.toString();
            this._scoreText.text = this._collision._score.toString();
            if (this._collision._lifeCount <= 0) {
                this._finalScore = this._collision._score;
                console.log(this._finalScore);
            }
            return this._finalScore;
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map