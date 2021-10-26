    // Create Players on submit and assign turn to player 1 by default
    document.getElementById('form-btn').addEventListener('click',function(){
        let nameMap = DomTravers.getInput();
        
        let player1 = new Player('',false,true);
        player1.name = nameMap.get('User_1');

        let player2 = new Player('',false,false);
        player2.name = nameMap.get('User_2') ;

        // Create map of objects and assign to Game.
        let playerMap = new Map();
        playerMap.set('User_1', player1);
        playerMap.set('User_2', player2);
        
        Game.players = playerMap;

        DomTravers.setNameOnDOM(player1, player2)
        DomTravers.hideForm('name-form');

        play();
    })
      
    function alternateTurn(playerOne, playerTwo){

        if( playerOne.hasTurn ){
            playerOne.hasTurn = false;
            playerTwo.hasTurn = true;
        }
        else if( playerTwo.hasTurn ){
            playerTwo.hasTurn = false;
            playerOne.hasTurn = true;
        }
        else{
            alert('ERROR !');
        }
    }

    function getPlayerTurn(playerOne, playerTwo){
        if( playerOne.hasTurn ){
            return playerOne;
        }else if( playerTwo.hasTurn ){
            return playerTwo;
        }else{
            alert('ERROR !')
            return null;
        }
    }

    function pickCard(userTurn, playerOne, playerTwo, deckOfCards){
        // Deal a card from the shuffled deck and update + display card on field
        let Card = new Deck().dealCard(deckOfCards);

        DomTravers.updateCard(userTurn, Card);
        DomTravers.showCard(userTurn)

        let player = getPlayerTurn(playerOne, playerTwo);
        DomTravers.displayText(player.name, Card.values, Card.suits);

        let cardValue = Object.values(Card);
        if(cardValue.indexOf('JR') > -1 || cardValue.indexOf('JB') > -1 ){
            // Alternate User Turns and display winner
            alternateTurn(playerOne, playerTwo);
            let winner = getPlayerTurn(playerOne, playerTwo).name;

            new Game().gameOver(winner);

        }else{
            // Alternate Turns and Continue
            alternateTurn(playerOne, playerTwo);
        }
    }

    function play(){

        const SUITS = ["♠", "♣", "♥", "♦"];
        const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        // Test Case for GAME OVER
        // const VALUES = ["JR","JB"];

        // Retrive Users
        let playerOne = Game.players.get('User_1');
        let playerTwo = Game.players.get('User_2');

        // Create Deck and shuffle
        let deck = new Deck();
        let deckOfCards = deck.createDeck(SUITS,VALUES);
        deck.shuffleDeck(deckOfCards);

        // On click check turn and pick card
        document.getElementById('btn-user1').addEventListener('click', function(){
            if( playerOne.hasTurn )
            pickCard('User_1', playerOne, playerTwo, deckOfCards)
        });
        document.getElementById('btn-user2').addEventListener('click', function(){
            if( playerTwo.hasTurn )
            pickCard('User_2', playerOne, playerTwo, deckOfCards)
        });
        
    }
    

// Imports
import Player from "./Player.js";
import Deck from "./Card.js";
import Game from "./Game.js";
import DomTravers from "./travers-dom.js";