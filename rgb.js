var numColor = 6;
var colors  = generateRandomColor(numColor);
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#cd");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
 square[i].style.backgroundColor = colors[i];

 square[i].addEventListener("click",function(){
 	var clickedColor = this.style.backgroundColor;

 if(clickedColor===pickedColor)
{
	message.textContent = "Correct!";
	h1.style.backgroundColor = clickedColor;
	changeColors(clickedColor);
	reset.textContent = "Play Again?"
}
else{
	message.textContent = "Try Again";
	this.style.backgroundColor = "#232323";
}
 });
}

function changeColors(color) {
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
}
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

reset.addEventListener("click",function(){
colors = generateRandomColor(numColor);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
 square[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "steelblue";
message.textContent = "";
this.textContent = "New Colors";
});

easy.addEventListener("click",function()
{
numColor = 3;
hard.classList.remove("selected");
easy.classList.add("selected");
colors = generateRandomColor(3);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i = 0; i < square.length; i++) {
	if(colors[i])
	{
		square[i].style.backgroundColor = colors[i];
	}
	else
	{
		square[i].style.display = "none";
	}
}
h1.style.backgroundColor = "steelblue";
});

hard.addEventListener("click",function()
{
numColor = 6;
easy.classList.remove("selected");
hard.classList.add("selected");
colors = generateRandomColor(6);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
square[i].style.backgroundColor = colors[i];
square[i].style.display = "block";
}
h1.style.backgroundColor = "steelblue";
});