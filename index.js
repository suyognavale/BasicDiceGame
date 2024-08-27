// Generates random number 
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;


// Selects the img element and modifies the src attribute to retrieve the correct image from the images directory
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+ randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+ randomNumber2 + ".png");


// Statement to check whether which number is higher
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins 🏳️" 
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins 🏴"
}else{
    document.querySelector("h1").textContent = "Play Again"
}