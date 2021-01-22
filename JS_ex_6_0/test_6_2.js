class Rectangle {
    // creation
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    // verif
    collides(otherRectangle) {
        var A = this.topLeftXPos+this.length;
        var B = otherRectangle.topLeftXPos+otherRectangle.length;
        var C = this.topLeftYPos+this.width;
        var D = otherRectangle.topLeftYPos+otherRectangle.width;
        if ((((this.topLeftXPos < otherRectangle.topLeftXPos)&&(otherRectangle.topLeftXPos < A))
        || ((this.topLeftXPos < B)&&(B < A)))
        && (((this.topLeftYPos < otherRectangle.topLeftYPos)&&(otherRectangle.topLeftYPos < C))
        || ((this.topLeftYPos < D)&&(D < C)))) {
        return true;
    }
    else {
        return false;
    }

}
}
//test "true"
//rect 1
let rect1 = new Rectangle(1,1,3,5);
//rect 2
let rect2 = new Rectangle(3,3,3,6);
//vérif "collides"
console.log(rect1.collides(rect2));