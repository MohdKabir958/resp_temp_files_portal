// Function to validate login form
function validateLoginForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;
    console.log(`email is : ${email} and password is ${password}`)

    // Check if email field is empty
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    // Check if password field is empty
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        alert("Invalid email format");
        return false;
    }

    // If all validation passes, the form can be submitted
    return true;
}
