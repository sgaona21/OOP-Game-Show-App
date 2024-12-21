/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {

    constructor() {
        this.missed = 0
        this.phrases = [new Phrase('how are you'), new Phrase('way to go'), new Phrase('coding is fun'), new Phrase('walk dont run'), new Phrase('please stand by')]
        this.activePhrase = null
    }

    startGame() {
        // Starts new game and generates new phrase

        overlayScreen.style.display = 'none'
        newPhrase = new Phrase(this.getRandomPhrase())
        this.activePhrase = newPhrase.phrase
        console.log(this.activePhrase)
        newPhrase.addPhraseToDisplay()
        if (overlayScreen.classList.contains('win')) {
            overlayScreen.classList.remove('win')
        } else if (overlayScreen.classList.contains('lose')) {
            overlayScreen.classList.remove('lose')
        }
        if (!overlayScreen.classList.contains('start')) {
            overlayScreen.classList.add('start')
        }
    }

    getRandomPhrase() {
        // Selects random phrase from an array
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase].phrase
    }

    handleInteraction() {
        //disables button after it has been clicked
        if (event.target.classList == "key") {
            event.target.disabled = true

            let guessedLetter = event.target.textContent
            if (!this.activePhrase.includes(guessedLetter)) {
                event.target.classList.add('wrong')
                this.removeLife()
            } else if (this.activePhrase.includes(guessedLetter)) {
                event.target.classList.add('chosen')
                newPhrase.showMatchedLetter()
                this.checkForWin()
            }
        }
    }

    removeLife() {
        //Removes a heart from display upon a wrong guess 
        const hearts = document.querySelectorAll('#scoreboard ol li')
        hearts[0].remove()

        const heartsContainer = document.querySelector('#scoreboard ol')
        let replacementHeart  = document.createElement('li')
        replacementHeart.innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`
        heartsContainer.appendChild(replacementHeart)
        this.missed +=1

        if (this.missed == 5) {
            this.gameOver()
        }

        

    }

    checkForWin() {
        // Checks game state to see if player has won and outputs a boolean
        const currentPhrase = document.querySelectorAll('#phrase ul li')
        let didPlayerwin = true
        for (let i = 0; i < currentPhrase.length; i++)   {
            if (!currentPhrase[i].classList.contains('space')) {
                if (currentPhrase[i].classList.contains('hide')) {
                    didPlayerwin = false
                    
                }
            }
        }
        if (didPlayerwin === true) {
            this.gameOver()
        }
    }

    gameOver() {
        // Updates screen upon outcome of game and refreshes the hearts
        overlayScreen.style.display = 'flex'
        const endMessage = document.getElementById('game-over-message')
        if (this.missed == 5) { 
            endMessage.textContent = 'Sorry, you didnt win.'
            overlayScreen.classList.remove('start')
            overlayScreen.classList.add('lose')
        } else {
            endMessage.textContent = 'Congrats, you won. Not bad.'
            overlayScreen.classList.remove('start')
            overlayScreen.classList.add('win')
        }

        const currentPhrase = document.querySelectorAll('#phrase ul li')
        currentPhrase.forEach(item => {
            item.remove();
        });

        const qwertyButtons = document.querySelectorAll("#qwerty .key");
        qwertyButtons.forEach(button => {
            button.disabled = false;
            if (button.classList.contains('chosen')) {
                button.classList.remove('chosen')
            } else if (button.classList.contains('wrong')) {
                button.classList.remove('wrong')
            }
        });

        const remainingHearts = document.querySelectorAll('#scoreboard ol li')
        remainingHearts.forEach(item => {
            item.remove();
        });
        const heartsContainer = document.querySelector('#scoreboard ol')
        let newHeartString = ``
        for (let i = 0; i < 5; i++) {
            newHeartString += `<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> `
        }
        heartsContainer.innerHTML = newHeartString
    }
}





