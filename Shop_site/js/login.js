var isLogged = false;

var objPeople = [
    {
        username: "mark",
        password: "mark"
    },
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "user1",
        password: "12345"
    },
    {
        username: "user2",
        password: "12345"
    },
]

function getInfo() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    objPeople.forEach(element => {
        if(username == element.username && password == element.password) {
            console.log(username + " logged in");
            document.getElementById("message").innerHTML = "You're logged";
            login();
            return;
        }
    });
    if(!isLogged) document.getElementById("message").innerHTML = "Incorrect username or password";
}

function checkLogged() {
    console.log("checklogged")
    if(!isLogged){
        document.getElementById('modal').classList.add('active')
    } 
    else {
        window.location.replace('profile.html')
    }
}

function login() {
    console.log("login");
    isLogged = true;
    document.getElementById('btn').textContent = "log out"
}
function logout() {
    console.log("logout");
    isLogged = false;
    document.getElementById('btn').textContent = "log in"
}