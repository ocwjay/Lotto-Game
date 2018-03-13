//Event listeners are everything
document.getElementById("playButton").addEventListener("click", wagerCheck);

//Globals
var score = 0;
var balance = 200;
var wagerGlobal;
var reward;

//We want score to load as 0 and the balance to load as $200.
document.getElementById("score").innerHTML = "<br />Score:<br />" + score;
document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;

//Check wager has been entered
function wagerCheck(){
  //Reset wager error
  document.getElementById("wagerError").innerHTML = "";
  var wagerIn = Math.floor(document.getElementById("wagerInput").value);
  //Now to check that it's greater than 0
  if(wagerIn > 0){
    //Check to see if wager is greater than balance. If it is, return an error, if not, proceed.
    if (wagerIn > balance){
      document.getElementById("wagerError").innerHTML = "You're too broke to do that." //Is that too mean? Haha.
    }
    else{
      //Subtract the wager from the balance
      balance = balance - wagerIn;
      document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;
      wagerGlobal = wagerIn;
      //After the wager/balance is settled, roll the balls
      playFunc();
    }
  }
  else{
    //Wager error message. Only shows when a wager less than 1 is entered, and disappears when play button is clicked.
    document.getElementById("wagerError").innerHTML = "Please enter a wager that is 1 or larger.";
  }
}

//Sweet. Now for the main function
function playFunc(){
  //Get random numbers for each ball
  var b1p = Math.floor((Math.random() * 49) + 1);
  var b2p = Math.floor((Math.random() * 49) + 1);
  var b3p = Math.floor((Math.random() * 49) + 1);
  var b4p = Math.floor((Math.random() * 49) + 1);
  var b5p = Math.floor((Math.random() * 49) + 1);
  var b6p = Math.floor((Math.random() * 49) + 1);
  //Assign the random numbers to their respective ball on the DOM
  document.getElementById("ballOneText").innerHTML = b1p;
  document.getElementById("ballTwoText").innerHTML = b2p;
  document.getElementById("ballThreeText").innerHTML = b3p;
  document.getElementById("ballFourText").innerHTML = b4p;
  document.getElementById("ballFiveText").innerHTML = b5p;
  document.getElementById("ballSixText").innerHTML = b6p;
  //Assigning the user input to variables
  var userNumOne = document.getElementById("numInOne").value;
  var userNumTwo = document.getElementById("numInTwo").value;
  var userNumThree = document.getElementById("numInThree").value;
  var userNumFour = document.getElementById("numInFour").value;
  var userNumFive = document.getElementById("numInFive").value;
  var userNumSix = document.getElementById("numInSix").value;
  //Check user input against random output
  if(b1p == userNumOne){
    score++;
    document.getElementById("score").innerHTML = "<br/>Score:<br />" + score;
    reward = wagerGlobal * 6;
    balance = balance + reward;
    document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;
  }
  if(b2p == userNumTwo){
    score++;
    document.getElementById("score").innerHTML = "<br/>Score:<br />" + score;
    reward = wagerGlobal * 6;
    balance = balance + reward;
    document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;
  }
  if(b3p == userNumThree){
    score++;
    document.getElementById("score").innerHTML = "<br/>Score:<br />" + score;
    reward = wagerGlobal * 6;
    balance = balance + reward;
    document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;
  }
  if(b4p == userNumFour){
    score++;
    document.getElementById("score").innerHTML = "<br/>Score:<br />" + score;
    reward = wagerGlobal * 6;
    balance = balance + reward;
    document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;
  }
  if(b5p == userNumFive){
    score++;
    document.getElementById("score").innerHTML = "<br/>Score:<br />" + score;
    reward = wagerGlobal * 6;
    balance = balance + reward;
    document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;
  }
  if(b6p == userNumSix){
    score++;
    document.getElementById("score").innerHTML = "<br/>Score:<br />" + score;
    reward = wagerGlobal * 6;
    balance = balance + reward;
    document.getElementById("balance").innerHTML = "<br />Balance<br />$" + balance;
  }
}
