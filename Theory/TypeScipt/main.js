"use strict";
exports.__esModule = true;
exports.Point_2 = void 0;
/* Types and Types assertions*/
var a;
var b;
var c;
var null_v = null;
var d;
// console.log(d); //Undefined
var e;
var f = [1, 2, 3];
var g = ['a', true, 25];
/* Arrow Functions */
var doLog = function (message) { return console.log(message); };
var drawPoint = function (point) {
    //....
};
drawPoint({
    x: 1,
    y: 2
});
/* Classes -> Export makes class visible for the tree*/
var Point_2 = /** @class */ (function () {
    /* ? - stands for non-obligatory parametr
        private and public stands for access modifiers
        Also we can get rid of asserting if we want for variables to have the same names
    */
    function Point_2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point_2.prototype.draw = function () {
        console.log(this.x + "");
    };
    Point_2.prototype.getDistance = function (another) {
        //...
    };
    /* Properties -> We can use them as fields !but with authentication!
    WORKING ONLY WITH ECMASCRIPT 5 and higher !
    */
    // set X(val){
    //     this.x = val;
    // }
    // get X(){
    //     return this.x;
    // }
    Point_2.prototype.setX = function (val) {
        this.x = val;
    };
    Point_2.prototype.getX = function () {
        return this.x;
    };
    return Point_2;
}());
exports.Point_2 = Point_2;
/* Object is an instance of a class? */
var point = new Point_2(1);
point.draw();
