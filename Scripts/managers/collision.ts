module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // private instance variables
        private _player: objects.Player;
        public _score: number;
        public _lifeCount: number;


        constructor(player: objects.Player) {
            this._player = player;
            this._score = 0;
            this._lifeCount = 500;
        }


        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow((endPoint.y - startPoint.y), 2));
        }

        public check(object: objects.GameObjetcs):string {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfWidth: number = this._player.width * 0.5;
            var objectHalfWidth: number = object.width * 0.5;
            var minDistance: number = playerHalfWidth + objectHalfWidth;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            // check if the distance between the player and th eother object is less 
            // than the minimum distance
            if (this.distance(startPoint, endPoint) < minDistance) {
               
                //check if it's an bird hit
                if (object.name === "bird") {
                    this._lifeCount--;
                    return this._lifeCount.toString();

                }
                
              // check if it is an gold hit
              if(object.name == "gold")
              {
                  this._score++;
                  return this._score.toString();
              }
                
           }
        }
    }
}