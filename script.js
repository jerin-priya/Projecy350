
document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("signInButton");

    signInButton.addEventListener("click", function () {
        window.location.href = "signin.html";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const signUpButton = document.getElementById("signUpButton");

    signUpButton.addEventListener("click", function () {
        window.location.href = "signup.html";
    });
});



//signup.html.....................

document.addEventListener("DOMContentLoaded", function () {
    const adminnButton = document.getElementById("adminButton");

    adminButton.addEventListener("click", function () {
        window.location.href = "admin.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const adminnButton = document.getElementById("studentButton");

    adminButton.addEventListener("click", function () {
        window.location.href = "student.html";
    });
});

//admin.html....................

const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  alert(`User Registration Successful!\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);

});



//student.html...................


document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const session = document.getElementById("session").value;
    const registration = document.getElementById("registration").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    alert(`User Registration Successful!\nName: ${name}\nDepartment: ${department}\nSession: ${session}\nRegistration: ${registration}\nEmail: ${email}\nPassword: ${password}`);
});


//signin.html....................

document.getElementById("signin-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    if (username === "yourusername" && email==="youremail" && password === "yourpassword") {
        // Authentication successful
        alert("Sign-in successful!");
        // You can redirect to a different page or perform other actions here.
    } else {
        // Authentication failed
        alert("Invalid credentials. Please try again.");
    }
    
});










