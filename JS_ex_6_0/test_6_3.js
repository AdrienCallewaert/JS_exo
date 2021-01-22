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
screenRect() {
    for (let i = 0; i < 1000; i++) {
        rect2 = new Rectangle(
            Math.floor(Math.random() * (100 - 1) + 1),
            Math.floor(Math.random() * (100 - 1) + 1),
            Math.floor(Math.random() * (100 - 1) + 1),
            Math.floor(Math.random() * (100 - 1) + 1)
        );
        console.log(rect2);
        console.log(rect1.collides(rect2));
    }
    return rect2;
}

}
let rect1 = new Rectangle(1, 2, 3, 2);
let rect2 = new Rectangle();

console.log(rect1.screenRect());