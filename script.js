
document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("signInButton");

    signInButton.addEventListener("click", function () {
        // Redirect to another page when the button is clicked
        window.location.href = "signin.html";
    });
});

