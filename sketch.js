function setup() {
    createCanvas(400,400);
    console.log("Check, Check");
}

function draw() {
    background(50,mouseX,mouseY);
    fill(mouseX,mouseY,20);
    ellipse(mouseX,mouseY, 50,50);
}