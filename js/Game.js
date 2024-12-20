/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0
        this.phrases = ['how are you', 'way to go', 'coding is fun']
        this.activePhrase = null
    }

    startGame() {
        overlayScreen.style.display = 'none'
        newPhrase = new Phrase(this.getRandomPhrase())
        console.log(newPhrase)
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
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase]
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
        console.log("remove life was called")
        const hearts = document.querySelectorAll('#scoreboard ol li')
        hearts[0].remove()

        const heartsContainer = document.querySelector('#scoreboard ol')
        let replacementHeart  = document.createElement('li')
        replacementHeart.innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`
        heartsContainer.appendChild(replacementHeart)
        this.missed +=1

        if (this.missed == 5) {
            console.log("ITS OVER DAWG")
            this.gameOver()
        }

        

    }

    checkForWin() {
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
            console.log("PLAYER WON")
            this.gameOver()
            
            
        }
    }

    gameOver() {
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
        heartsContainer.innerHTML = `<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`
                 
        
        
    }
}
