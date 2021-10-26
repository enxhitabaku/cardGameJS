class Player{
    constructor(name, hasWon, hasTurn){
      this._name = name;
      this._hasWon = hasWon;
      this._hasTurn = hasTurn;
    }

    get name(){
        return this._name;
    }
    // Set new name capitalized
    set name(newName){
        this._name = newName.charAt(0).toUpperCase() + newName.slice(1);
    }

    get hasTurn(){
        return this._hasTurn;
    }
    set hasTurn(newTurn){
        this._hasTurn = newTurn;
    }

    get hasWon(){
        return this._hasWon;
    }
    set hasWon(won){
        this._hasWon = won;
    }
    
}

export default Player;