// This is not the right place hacker o.O
const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')

function validate(){

    if (password.value === "admin" | username.value==="admin"){
        alert("Hamcker spotted!!")
    }
    else if(password.value.includes("script") | username.value.includes("script")){
        alert("XSS? 😆😆😆")
    }
    else if(password.value.includes("ls") | username.value.includes("ls")){
        alert("noob.txt\nflag.txt\nnasa hacking.pdf\ncreds.txt\ninsert_brain.html")
    }
    else if(password.value.includes("whoami") | username.value.includes("whoami")){
        alert("I'm jopraveen✋")
    }
    else{
        alert("TEST")
        window.location = "https://jopraveen.me/hamcker.txt"
    }

}