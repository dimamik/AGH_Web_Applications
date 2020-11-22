/* Types and Types assertions*/
let a: number;
let b: string;
let c: boolean;
const null_v = null;
let d;
// console.log(d); //Undefined
let e: any;
let f: number[] = [1, 2, 3];
let g: any[] = ['a', true, 25];

/* Arrow Functions */
let doLog = (message) => console.log(message);

/* Interfaces -> Pascal naming convention*/
interface Point {
    x: number;
    y: number;
}
let drawPoint = (point: Point) => {
    //....
}

drawPoint({
    x: 1,
    y: 2
})

/* Classes -> Export makes class visible for the tree*/
export class Point_2 {

    /* ? - stands for non-obligatory parametr 
        private and public - stands for access modifiers
        Also we can get rid of asserting if we want for variables to have the same names
    */
    constructor(private x?: number, private y?: number) {
    }
    draw() {
        console.log(this.x + "");

    }
    getDistance(another: Point_2) {
        //...
    }
    /* Properties -> We can use them as fields !but with authentication! 
    WORKING ONLY WITH ECMASCRIPT 5 and higher !
    */
    // set X(val){

    //     this.x = val;
    // }
    // get X(){
    //     return this.x;
    // }
    setX(val) {
        this.x = val;
    }
    getX(): number {
        return this.x;
    }
}
/* Object is an instance of a class? */
let point: Point_2 = new Point_2(1);
point.draw();
