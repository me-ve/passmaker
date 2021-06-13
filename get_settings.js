class Settings {
    constructor(smallLetters, largeLetters, numbers, specialCharacters, length) {
        this.smallLetters = smallLetters;
        this.largeLetters = largeLetters;
        this.numbers = numbers;
        this.specialCharacters = specialCharacters;
        this.length = length;
        this.methodGiven = (smallLetters || largeLetters || numbers || specialCharacters);
    }
}

function getSettings() {
    let smallLetters = document.getElementById("small_letters").checked;
    let largeLetters = document.getElementById("large_letters").checked;
    let numbers = document.getElementById("numbers").checked;
    let specialCharacters = document.getElementById("special_characters").checked;
    let length = document.getElementById("length").valueAsNumber;
    let settings = new Settings(smallLetters, largeLetters, numbers, specialCharacters, length);
    return settings;
}