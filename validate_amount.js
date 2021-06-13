function validateAmount() {
    let length = document.getElementById("amount").valueAsNumber;
    if (isNaN(length)) {
        document.getElementById("amount").value = '';
    } else if (length > 256) {
        document.getElementById("amount").value = '256';
    } else if (length <= 0) {
        document.getElementById("amount").value = '';
    }
}