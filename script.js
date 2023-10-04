
document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("signInButton");

    signInButton.addEventListener("click", function () {
        // Redirect to another page when the button is clicked
        window.location.href = "signin-success.html";
    });
});
    document.addEventListener("DOMContentLoaded", function () {
            const page2 = document.getElementById("page2");
            const page1Button = document.getElementById("page1Button");
            const page2Button = document.getElementById("page2Button");

            // Initial state: Show Page 1, hide Page 2
            page1.style.display = "block";
            page2.style.display = "none";

            page1Button.addEventListener("click", function () {
                // Hide Page 1, show Page 2
                page1.style.display = "none";
                page2.style.display = "block";
            });

            page2Button.addEventListener("click", function () {
                // Hide Page 2, show Page 1
                page2.style.display = "none";
                page1.style.display = "block";
            });
    });
