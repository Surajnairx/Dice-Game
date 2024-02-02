var d1 = Math.floor(Math.random()*6 + 1);
var d2 = Math.floor(Math.random()*6 + 1);

var randomImage1 = "images/dice"+d1+".png";
var randomImage2 = "images/dice"+d2+ ".png"

document.getElementsByTagName("img")[0].setAttribute("src" ,randomImage1);
document.getElementsByTagName("img")[1].setAttribute("src" ,randomImage2);

if(d1>d2){
    document.querySelector("h1").innerHTML ="Player 1 wins";
}
else if(d1<d2){
    document.querySelector("h1").innerHTML ="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}