const db=require('./db');
function showSignup() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // BACKEND CONNECTION POINT
    console.log("Login:", username, password);

    alert("Login clicked (connect backend here)");
}

function signup() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // BACKEND CONNECTION POINT
    console.log("Signup:", username, email, password);

    alert("Signup clicked (connect backend here)");
    closeSignup();
}
