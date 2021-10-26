class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }

    get suits() {
        return this.suit;
    }

    get values(){
        return this.value;
    } 

    getColor() {
        if(this.suit === "♣" || this.suit === "♠" || this.suit == "Black")
            return "black";
        else
            return "red";
    }


}//End of Class Card

class Deck extends Card {
    constructor(suit, value, _deckOfCards){
        super(suit, value);
        this._deckOfCards = _deckOfCards;
    }
    
    get deckOfCards(){
        return this._deckOfCards;
    }
    set deckOfCards(_deckOfCards){
        return this._deckOfCards = _deckOfCards;
    }

    // Create Deck of Cards Array, filling it with Card Objects that have a suit and value
    createDeck(_suits, _values){
        let deck = new Array();

        for(let i = 0; i < _suits.length; i++)
        {
            for(let j = 0; j < _values.length; j++)
            {
                //Push Card Object to deck array
                deck.push( new Card(_suits[i], _values[j]) );
            }
        }
        // Add Jolly
        deck.push( new Card('Red','JR') );
        deck.push( new Card('Black','JB') ); 

        return deck;
    }

    shuffleDeck(_deckOfCards){
        for(let i = _deckOfCards.length - 1; i>0; i--){
            // Get random index to put the card and store the current card value in a temporary variable
            let newIndex = Math.floor( Math.random() * (i+1) );
            let oldValue = _deckOfCards[i];
            // Swap values 
            _deckOfCards[i] = _deckOfCards[newIndex];
            _deckOfCards[newIndex] = oldValue;
        }
    }

    // Return Card object by removing the last item in a deck of cards (Arrray filled with Card Objects)
    dealCard(_deckOfCards){
        return _deckOfCards.pop();
    }

}

export default Deck;
