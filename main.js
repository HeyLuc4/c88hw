canvas = new fabric.Canvas('myCanvas');
ballX = 0;
ballY = 0;
holeX = 400;
holeY = 800;
blockWidth = 5;
blockHeight = 5;

function loadImg(){
	fabric.Image.fromURL("buraco.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(hole_obj);
		});
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ball_obj);
	});
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX == holeX) && (ballY == holeY)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "Você Acertou a bola";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up() {
		if (ballY >= 0) {
			ballY = ballY - blockHeight;
			console.log("Altura do bloco = " + blockHeight);
			console.log("X =" + ballX + "Y =" + ballY);
			canvas.remove(ball_obj);
			newImage();
		}
	}
	
	function down() {
		if (ballY <= 700) {
			ballY = ballY + blockHeight;
			console.log("Altura do bloco = " + blockHeight);
			console.log("X =" + ballX + "Y =" + ballY);
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function left() {
		if (ballX > 0) {
			ballX = ballX - blockWidth;
			console.log("Largura do bloco = " + blockWidth);
			console.log("X =" + ballX + "Y =" + ballY);
			canvas.remove(ball_obj);
			newImage();
		}
	}
	
	function right() {
		if (ballX <= 850) {
			ballX = ballX + blockWidth;
			console.log("Largura do bloco = " + blockWidth);
			console.log("X =" + ballX + "Y =" + ballY);
			canvas.remove(ball_obj);
			newImage();
		}
	}
}
