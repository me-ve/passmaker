function validateLength() {
    let length = document.getElementById("length").valueAsNumber;
    if (isNaN(length)) {
        document.getElementById("length").value = '';
    } else if (length > 128) {
        document.getElementById("length").value = '128';
    } else if (length < 0) {
        document.getElementById("length").value = '';
    }
}