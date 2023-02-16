var player1Count = 0;
var player2Count = 0;
function shoot(){



/** random images changing**/
// For player 1
var randomNum1 = Math.floor(Math.random()*3)+1;
var randomImg1 = "images/hand"+randomNum1+".png";
$(".player-1-hand").attr("src",randomImg1);

//for player 2
var randomNum2 = Math.floor(Math.random()*3)+1;
var randomImg2 = "images/hand"+randomNum2+".png";
$(".player-2-hand").attr("src",randomImg2);


var result = "";
if (randomNum1 === 1 && randomNum2 === 3){
    result+="Player 1 scores";
    player1Count+=1;
}
else if (randomNum1 === 2 && randomNum2 === 1){
    result+="Player 1 scores";
    player1Count+=1;
}
else if (randomNum1 === 3 && randomNum2 === 2){
    result+="Player 1 scores";
    player1Count+=1;
}
else if (randomNum1 == randomNum2){
    result+="Draw"
}
else {
    result+="Player 2 scores";
    player2Count+=1;
}
$(".display-score-winner")[0].innerHTML = result;
$("span")[0].innerHTML = player1Count;
$("span")[1].innerHTML = player2Count;
if (player1Count === 3){
    $("h1")[0].innerHTML = "👑 Player 1 wins";
     setTimeout(function () { location.reload(true); }, 1000);
}
else if (player2Count === 3){
    $("h1")[0].innerHTML = "Player 2 wins 👑";
    setTimeout(function () { location.reload(true); }, 1000);
}
}