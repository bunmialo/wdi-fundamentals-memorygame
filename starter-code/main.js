console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

//if (cardTwo === cardFour) {
//    alert ("You found a match!");
//
//} else if (cardOne === cardTwo) {
//    alert ("You found a match!");
//
//} else {
//    alert("Sorry, try again.");
//}

//var cards = ["queen", "king", "queen", "king"];

var gameBoard = document.getElementById('game-board');

var createCards = function(){
    gameBoard.innerHTML = '';
    for (var i = 0; i < cards.length; i++){
        var cardOne = document.createElement("div");
        cardOne.classList.add("card");
        cardOne.setAttribute('data-card', cards[i]);
        cardOne.addEventListener('click', isTwoCards);
        gameBoard.appendChild(cardOne);

    }
};

var isTwoCards = function (){
    cardsInPlay.push(this.getAttribute('data-card'));
    
    if (this.getAttribute('data-card') === 'king'){
        this.innerHTML = '<img src="images/king.jpg" alt="King of Spades" />';
    } else {
         this.innerHTML = '<img src="images/queen.jpg" alt="King of Spades" />';
    }
    
    // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // passing the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];
      createCards();
  }
};

var isMatch = function(cip){
    if(cip[0] === cip[1]){
        alert('match found!');
    } else {
        alert('no match');
    }
};

createCards();