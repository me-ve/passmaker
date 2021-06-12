function getCharactersBetween(begin, end) {
    let result = "";
    for (let char = begin; char.charCodeAt(0) <= end.charCodeAt(0); char = String.fromCharCode(char.charCodeAt(0) + 1)) {
        result += char;
    }
    return result;
}

function generatePassword() {
    let settings = getSettings();
    let charset = "";
    if (settings.numbers) {
        charset += getCharactersBetween('0', '9');
    }
    if (settings.largeLetters) {
        charset += getCharactersBetween('A', 'Z');
    }
    if (settings.smallLetters) {
        charset += getCharactersBetween('a', 'z');
    }
    if (settings.specialCharacters) {
        charset += getCharactersBetween('!', '/');
        charset += getCharactersBetween(':', '@');
        charset += getCharactersBetween('[', '`');
        charset += getCharactersBetween('{', '~');
    }
    let password = "";
    for (let i = 0; i < settings.length; i++) {
        let charNumber = (Math.random() * charset.length) | 0;
        password += charset[charNumber];
    }
    document.getElementById("password").value = password;
}