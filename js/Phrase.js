/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        //Dynamically generates an element for each letter in the given phrase 
        const ul = document.createElement("ul");
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] == ' ') {
                let space = document.createElement("li")
                space.classList.add('space')
                space.innerHTML = this.phrase[i]
                ul.appendChild(space)    
            } else {
                let letter = document.createElement("li")
                letter.classList.add('hide')
                letter.classList.add('letter')
                letter.classList.add(`${this.phrase[i]}`)
                letter.innerHTML = this.phrase[i]
                ul.appendChild(letter)
            }
        }
        const oldUL = document.querySelector("#phrase ul");
        const phraseElement = document.getElementById("phrase")
        phraseElement.replaceChild(ul, oldUL)

    }

    checkLetter() {
        //Checks to see if the players guessed letter is in the given phrase and returns bool
        let letterGuess = ''
        if (event.target.classList == "key") {
            letterGuess = event.target.textContent
        }
        
        if (this.phrase.includes(letterGuess)) {
            return true
        } else {
            return false
        }
    }

    showMatchedLetter() {
        //reveals letter if players guess is included in phrase 
        let guessedLetter = event.target.textContent
        const entirePhrase = document.getElementsByClassName('letter')
        for (let i = 0; i < entirePhrase.length; i++) {
            if (entirePhrase[i].textContent == guessedLetter) {
                entirePhrase[i].classList.remove('hide')
                entirePhrase[i].classList.add('show')
            }
        }
    }
}




