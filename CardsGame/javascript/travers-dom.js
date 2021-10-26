let DomTravers = (function(){

    let getFormInput = () => {
        let _formInput = document.querySelectorAll('form#name-form .name-fieldset .name-input');
        
        let _userNameMap = new Map();
        _userNameMap.set( 'User_1', _formInput[0].value );
        _userNameMap.set( 'User_2', _formInput[1].value );

        return _userNameMap;
    }

    let hideForm = (formId) => {
        let formEl = document.getElementById(formId);
        formEl.classList.add('hide');
    }
    
    let setDOMname = (Player1, Player2) => {
        document.getElementById('user-1').innerText = Player1.name;
        document.getElementById('user-2').innerText = Player2.name;
    }

    let showCard = (userTurn) => {
       
        try{
            if(userTurn == "User_1")
                document.getElementById('card-1').classList.remove('hide');
            else if(userTurn == "User_2")
                document.getElementById('card-2').classList.remove('hide');
            else
                throw 'Incorrect User Turn. Internal Error !';
        }
        catch(err){
            console.groupCollapsed('User Turn ERROR !');
            console.error(err.trace());
            console.groupEnd();

            alert('Error ! Check Console Log .')
        }
    }

    // Update Card on the board. Parameter the user turn and Card Object that is poped from the deck
    let updateCard = (userTurn, Card) => {
        // Get DOM elements and assign Card Value and Suit. Throw an error if incorrect user turn
        try{
            if(userTurn == "User_1"){
                let cardValue = document.querySelectorAll('#card-1 .value');
                for(let i of cardValue){
                    i.innerText = Card['value'];
                 }

                let cardSuit = document.querySelector('#card-1 .suit');
                cardSuit.innerText = Card['suit'];

                let color = Card.getColor();
                document.querySelector("#card-1").setAttribute('style','color:'+color);
            }
            else if(userTurn == "User_2"){
                let cardValue = document.querySelectorAll('#card-2 .value');
                for(let i of cardValue){
                    i.innerText = Card['value'];
                 };

                let cardSuit = document.querySelector('#card-2 .suit');
                cardSuit.innerText = Card['suit'];
                
                let color = Card.getColor();
                document.querySelector("#card-2").setAttribute('style','color:'+color);
            }
            else
                throw 'Update Card Function ERROR !';
        }  
        catch(err){
            console.groupCollapsed('Update Card Function ERROR');
            console.error(err);
            console.groupEnd();

            alert('ERROR on UPDATE CARD Function !');
        }
    }

    let display = (name, value, suit) =>{ document.getElementById('outputField').innerText = (name+" got "+value+" of "+suit) };

    return {
        getInput : getFormInput,
        hideForm : hideForm,
        setNameOnDOM : setDOMname,
        showCard : showCard,
        updateCard : updateCard,
        displayText : display
    }

})();

export default DomTravers;