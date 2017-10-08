function setup(){
	// put setup code here
	createCanvas(500,500);
}

function draw(){
	// put drawing code here
	// Redraw the background
	
	if(keyIsPressed && key=="r"){background(255,255,255);}
	
	if(mouseIsPressed){fill(255,100,0);}
	else{fill(0,0,255);}
	
	ellipse(mouseX,mouseY,50,50);
	
}