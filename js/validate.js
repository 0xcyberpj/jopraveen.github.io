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
        window.location = "data:image/jpeg;base64,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"
        return false;
    }
    else if (username.value === "jopraveen" | password.value==="I_h4T3_p41d_Cr1ng3_c0uR53s"){
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