document.querySelector('#btn').addEventListener('click', title);

const numberOfSkills = document.querySelectorAll('.skill').length;

for (var i = 0; i < numberOfSkills; i++) {
    document.querySelectorAll('.skill')[i].addEventListener('click', function () {
        var skillNumber = this.classList[0];
        console.log('skill ' + skillNumber);
        this.classList.toggle('skillExpanded');
        this.classList.toggle('skill');
    });
}

function title() {
    document.querySelector('#heroTitle').classList.toggle('font1')
    document.querySelector('#heroTitle').classList.toggle('font2');
    console.log('click');
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

reveal();

window.onscroll = progressBar();

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}

