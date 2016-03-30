// Source Name: assets.ts
// Author's name: Sisi Li
// Last modified: March 29, 2016
// Program description: create a asset module for all the images
// Revision History: version 10
module objects {
    // ASSET CLASS ++++++++++++++++++++++++++
    export class Asset {
        //PUBLIC INSTANCE VARIABLES
        public id:string;
        public src: string;
        // CONSTRUCTOR +++++++++++++++++++++
        constructor(id:string, src:string) {
            this.id = id;
            this.src = src;
        }
    }
}