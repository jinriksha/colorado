function verifyEmail() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm").value;
    if (email !== confirmEmail) {
        alert("Emails do not match!");
        return false;
    } else {
        alert("Emails match!")
        return true;
    }
}

document.getElementById("checkEmail").addEventListener('click', verifyEmail);