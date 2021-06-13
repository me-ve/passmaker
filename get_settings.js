class Settings {
    constructor(smallLetters, largeLetters, numbers, specialCharacters, length, amount) {
        this.smallLetters = smallLetters;
        this.largeLetters = largeLetters;
        this.numbers = numbers;
        this.specialCharacters = specialCharacters;
        this.length = length;
        this.amount = amount;
        this.isMethodGiven = (smallLetters || largeLetters || numbers || specialCharacters);
    }
}

function getSettings() {
    let smallLetters = document.getElementById("small_letters").checked;
    let largeLetters = document.getElementById("large_letters").checked;
    let numbers = document.getElementById("numbers").checked;
    let specialCharacters = document.getElementById("special_characters").checked;
    let length = document.getElementById("length").valueAsNumber;
    let amount = document.getElementById("amount").valueAsNumber;
    let settings = new Settings(smallLetters, largeLetters, numbers, specialCharacters, length, amount);
    return settings;
}