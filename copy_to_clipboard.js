function copyPasswordToClipboard() {
    let copyPassword = document.querySelector("#password");
    copyPassword.select();
    document.execCommand("copy");
}