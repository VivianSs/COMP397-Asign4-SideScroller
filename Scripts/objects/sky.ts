// Source Name: sky.ts
// Author's name: Sisi Li
// Last modified: March 29, 2016
// Program description: create a sky module as basic side roller in the game
// Revision History: version 10
module objects {
    // SKY class +++++++++++++++++++++++++++++++++++
    export class Sky extends objects.GameObjetcs{
        //private instance variables
       
          
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor(){
            super(("sky"));
            
              this._speed.x = 6;// sky speed
              this._reset(0);
        }
        
        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            //check to see if the right of the ocean 
            // has met the right of the scene
           
            if(this.x <= value){
                this._reset(0);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number): void {
            this.x =value;
        }
        
        public update(): void{
          
            //scroll the sky 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-1280);
        }
    }
}