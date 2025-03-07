//       // interface 1-------------------------------
// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }

//      // interface 2-----------------------------------
// interface Story {
//     createStory(): void
// }
// /// implements - following the protocol of TakePhoto------------------
// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) {}
// }

// class Youtube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string  
//     ) {}

//     createStory(): void {
//         console.log("Story was created");
//     }
// }