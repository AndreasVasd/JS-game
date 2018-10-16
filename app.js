/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
-------------------------------------------------------------------------*/


/*Setter because we set a value
document.querySelector('#current-' + activePlayer).textContent = dice;//we select the element current- and the value changes...also activePlayer changes
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//Getter because we get a value
var x = document.querySelector('#score-0').textContent;
console.log(x); //we save in variable x the value #score-0 selector

*/

/*-----------------------------------------------------------------------
function btn() {

}


document.querySelector('.btn-roll').addEventListener('click', btn) //addEventListener takes as parameters the type of event and the function it is called from addEventListener...that's why we call btn callback function and we don't put () after btn because we are not call it

-----------------------------------------------------------------------*/
//Query selectors are for classes and id's(we have to put the specific css selector) but getElementById is for id's only(we don't have to put the selector but the id name)

var scores, roundScore, activePlayer, dice, gamePlaying;

//Instead of initialize our variables generally, we create an initilization function which we call there
init();


//2nd way...anonymous function...if we don't want to call it as an external function like before with the callback..it can be used only once..e.g there
document.querySelector('.btn-roll').addEventListener('click', function() {
    //Only if the game is playing the followings are happening
    if(gamePlaying) {
    
    
    //Random number generation
    var dice = Math.floor(Math.random() * 6)+1;
    
    //Display the result
    var diceDOM =  document.querySelector('.dice');//we save that part in a variable to avoid repeating
    diceDOM.style.display = 'block';//επανεμφάνιση του ζαριού
    diceDOM.src = 'dice-' + dice + '.png';//εμφάνιση του νουμέρου που ρίξαμε και της εικόνας που αντιστοιχεί
    
    //Update the round score IF the rolled number was NOT 1
    if(dice !== 1) {
        //Add score
        roundScore += dice;//προσθέτω στο roundscore όσο είχα συν την ένδειξη του ζαριού
        document.querySelector('#current-' + activePlayer).textContent = roundScore; //στον εκάστοτε active player αποθηκεύεται η τιμή του προσωρινού score
    } else {
        //next
        nextPlayer();
    }
    }
    
});

//How to hold the score
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
    //Add the current score to the global score
    scores[activePlayer] += roundScore;
    
    //Uplaod UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'You won!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');//Remove the active class form the winner
        gamePlaying = false; //the game stops
    } else {
        //next player
        nextPlayer();
    }
    
    }
        
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //if activePlayer is 0, then go to 1, else go to 0 again - ternary operator
        roundScore = 0;//ώστε να μην προστεθεί στο ήδη υπάρχον roundscore και να ξεκινήσει από το 0 για τον επόμενο παίκτη
        
        //ώστε να μηδενίζεται το προσωρινό score του παίκτη κάθε φορά που κάποιος φέρνει 1
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //ώστε η active class να εναλλάσεται ανάλογα με τον active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        //να εξαφανίζεται το ζάρι πριν παίξει ο επόμενος παίκτης
        document.querySelector('.dice').style.display = 'none';
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    }

//Functionallity for the button about new game
document.querySelector('.btn-new').addEventListener('click', init);//we don't call the function there...we only call it

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; //the state of the game 
    
//Change the css of an element
document.querySelector('.dice').style.display = 'none'; //we hide the dice when the game is not started yet

//Instead of using querySelector I use ElementById 
document.getElementById('score-0').textContent = '0';//αρχικοποίηση του total score στο 0
document.getElementById('score-1').textContent = '0';//αρχικοποίηση του total score στο 0
document.getElementById('current-0').textContent = '0';//αρχικοποίηση του current score στο 0
document.getElementById('current-1').textContent = '0';//αρχικοποίηση του current score στο 0
document.getElementById('name-0').textContent = 'Player 1';//the initial value when the game starts
document.getElementById('name-1').textContent = 'Player 2';//the initial value when the game starts
    
//Indicate who the active player is when I click new game
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}














