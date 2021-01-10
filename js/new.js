// //scroll
// window.addEventListener('scroll', function(){
//     var header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);
// });

// function toggleMenu(){
//     var menuToggle = document.querySelector('.toggle');
//     var menu = document.querySelector('.menu');
//     menuToggle.classList.toggle('active')
//     menu.classList.toggle('active')
// }

(function () {
    'use strict'
    var typed = new Typed(".text-typed", {
        strings: ['PROGRAMMER💻', 'PENTESTER🛠', 'HTB GURU🥉', 'FRONT-END DEV🚪'],
        typeSpeed: 80,
        loop: true,
        backDelay: 900,
        startDelay: 400,
        backSpeed: 50,
        loop: true,
        showCursor: false,
      });
    function toggleMenu(){
        var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
    }
    document.querySelector("div.toggle").addEventListener("click" , toggleMenu);
    window.addEventListener("load", function() {
        setTimeout(() => {
            document.querySelector(".fullscreen").style.display = "none";
        }, 500);
    });
    window.addEventListener('scroll', function(){
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });    
})();

// For view counter
const countEl = document.getElementById('count');

updateVisitorsCount();

function updateVisitorsCount() {
    fetch('https://api.countapi.xyz/update/jopraveen.github.com/jopraveen/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}