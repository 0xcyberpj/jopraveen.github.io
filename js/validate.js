// This is not the right place hacker o.O
const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')

function validate(){

    if (password.value === "admin" | username.value==="admin"){
        window.location = "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F021%2F807%2Fig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg"
        return false;
    }
    else if(password.value.includes("script") | username.value.includes("script")){
        window.location = "https://media.makeameme.org/created/xss-xss-everywhere-5b8065.jpg"
        return false;
    }
    else if(password.value.includes("ls") | username.value.includes("ls")){
        alert("noob.txt\nflag.txt\nnasa hacking.pdf\ncreds.txt\ninsert_brain.html")

    }
    else if(password.value.includes("whoami") | username.value.includes("whoami")){
        window.location = "https://i.imgflip.com/44pmyg.jpg"
        return false;
    }
    else if (username.value === "jopraveen" & password.value==="I_h4T3_p41d_Cr1ng3_c0uR53s"){
        alert("Welcome <3")
        window.location = "flag.txt"
        return false;
    }
    else{
        alert("Don't get rick rolled!")
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        return false;
    }

}

// [particles.js]
