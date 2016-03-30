var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            // add background
            this._background = new createjs.Bitmap(assets.getResult("MenuScene"));
            this.addChild(this._background);
            //Add Menu Label
            this._endLabel = new objects.Label("END SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 30, true);
            this.addChild(this._endLabel);
            // add final score to the scene
            this._finalScore = new objects.ScoreSystem("ScoreLabel", 210, config.Screen.CENTER_Y + 60);
            this.addChild(this._finalScore);
            //add final score       
            this._playScene = new scenes.Play();
            this._score = new objects.Label(this._playScene.update().toString(), "18px Consolas", "#FFCC00", 279, 310, false);
            this.addChild(this._score);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    })(objects.Scene);
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map