class Circle {
    // crée le cercle 
    constructor(xPos,yPos,radius){
        this.radius = radius;
        this.xPos = xPos;
        this.yPos = yPos;
    }// position
    move(xOffset,yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
    }// renvoie la surface
    get surface (){
        return Math.PI*(this.radius*this.radius);
    }
}
let theCircle = new Circle(0,0,1);
console.log(theCircle);
console.log('surface circle : '+theCircle.surface);
// déplcement
theCircle.move(2,1);
console.log(theCircle);

