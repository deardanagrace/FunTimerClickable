/**************************************************************************
Clickable Tamogotchi
 by Dana Capistrano

A fun clickable tamogotchi game with a timer function so that you are forced to watch your tamogotchi poop and stuff. 

clickable library by: https://github.com/scottkildall/p5.clickable
timer classes by: https://github.com/scottkildall/p5.timer
*****************************************************************************/
//timer variables
var eatTimer;
var playTimer;
var walkTimer;
waitForClick = true;
//draw function
var drawFunction;
//button variables
var btnX = 100;
var btnY = 100;
var walkButton;
var playButton;
var eatButton;
var buttonOffset = 300;
//colors
var purplecol = '#9fa8ff';
var pinkcol = '#fb9cfb';

function preload() {
    tamoPlayImg = loadImage('assets/tamo_play.gif');
    tamoEatImg = loadImage('assets/tamo_eat.gif');
    tamoBornImg = loadImage('assets/tamo_born.gif');
    tamoWalkImg = loadImage('assets/tamo_walk.gif');
    //font
    myFont = loadFont('assets/DotGothic16-Regular.ttf');
}

function setup() {
    createCanvas(1200, 900);
    imageMode(CENTER);
    textAlign(CENTER);
    //font
    textSize(25);
    textFont(myFont);
    drawFunction = drawLanding;

    //eat button
    eatButton = new Clickable();
    eatButton.x = btnX;
    eatButton.y = btnY;
    eatButton.locate(400, height / 2 + buttonOffset);

    eatButton.onOutside = function() {
        this.color = purplecol;
        this.cornerRadius = 90;
        this.strokeWeight = 0;
        this.text = "eat!";
        this.textFont = myFont;
    }

    eatButton.onPress = function() {
        drawFunction = drawEat;

    }

    //play button
    playButton = new Clickable();
    playButton.x = btnX;
    playButton.y = btnY;
    playButton.locate(width/2-50, height / 2 + buttonOffset);
    playButton.onOutside = function() {
        this.color = purplecol;
        this.cornerRadius = 90;
        this.strokeWeight = 0;
        this.text = "play!";
        this.textFont = myFont;
    }
    playButton.onPress = function() {
        drawFunction = drawPlay;
    }

    //walk button
    walkButton = new Clickable();
    walkButton.x = btnX;
    walkButton.y = btnY;
    walkButton.locate(700, height / 2 + buttonOffset);
    walkButton.onOutside = function() {
        this.color = purplecol;
        this.cornerRadius = 90;
        this.strokeWeight = 0;
        this.text = "walk!";
        this.textFont = myFont;
    }
    walkButton.onPress = function() {
        drawFunction = drawWalk;
    }

}

function draw() {
    background(pinkcol);
    drawFunction();

    eatButton.draw();
    walkButton.draw();
    playButton.draw();
}

drawLanding = function() {
    image(tamoBornImg, width / 2, height / 2);
    text ('this is your tamogotchi! lets party!', width/2, 100)
}

drawEat = function() {
    image(tamoEatImg, width / 2, height / 2);
    if (eatTimer.expired() ) {
    	drawFunction = drawLanding;
    }
}

drawPlay = function() {
    image(tamoPlayImg, width / 2, height / 2);
      if (playTimer.expired() ) {
    	drawFunction = drawLanding;
    }
}

drawWalk = function() {
    image(tamoWalkImg, width / 2, height / 2);
      if (walkTimer.expired() ) {
    	drawFunction = drawLanding;
    }
}

function mousePressed() {
    if (drawFunction === drawEat) {
        eatTimer = new Timer(3000);
        eatTimer.start();
    }
    if (drawFunction === drawPlay) {
    	playTimer = new Timer (3000);
    	playTimer.start ();
    }
      if (drawFunction === drawWalk) {
    	walkTimer = new Timer (3000);
    	walkTimer.start ();
    }
}