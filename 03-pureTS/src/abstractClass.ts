abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void  //  this is an abstract method, i dont know how anybody is going to implement it but they need to implement it otherwise they are not following the abstract class
    // this getReelTime() doesn't give me any problem, if it doesn't implemented in inherited class, this is the use abstract classes
    getReelTime(): number {
        //some complex calculation 
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)   // pass all required values inherited from abstract class
    }

    // implemented sepia()
    getSepia(): void {
        console.log("Sepeia")
    }

}

const hc = new Instagram("test", "test", 3)
hc.getReelTime()    // thats totally allowed in inherited
