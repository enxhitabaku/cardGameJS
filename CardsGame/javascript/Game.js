class Game {
    
    // _players to store Player Object who will play. 
    constructor(_players){
        this._playersMap = _players;
    }

    get players(){
        return this._playersMap;
    }

    // Add PlayerMap to Game Object
    set players(PlayerMap){
        this._playersMap = PlayerMap;
    }

    gameOver(name){
        alert(`Game Over ${name} Won !`);
        document.querySelector('body').classList.add('hide');
    }

}

export default Game;