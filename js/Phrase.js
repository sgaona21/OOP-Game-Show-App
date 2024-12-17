/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        //Dynamically generates the HTML for the given phrase
       let phraseToDisplay = '' 
       for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] == ' ') {
                let space = `<li class="space">${this.phrase[i]}</li>`
                phraseToDisplay += space
            } else {
                let letter = `<li class="hide letter h"> ${this.phrase[i]} </li>`;
                phraseToDisplay += letter
            }
        }
        const ul = document.querySelector('#phrase ul')
        ul.innerHTML = phraseToDisplay
    }

    checkLetter() {
        //Checks to see if the players guessed letter is in the given phrase
        let playerGuess = ''
        if (playerGuess.includes(playerGuess)) {
            return true
        } else {
            return false
        }
    }

    showMatchedLetter() {

    }
}


const myNewPhrase = new Phrase("how are you")


console.log(myNewPhrase.addPhraseToDisplay())