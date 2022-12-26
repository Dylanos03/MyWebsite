document.querySelector('#btn').addEventListener('click', title);

const clickSkill = document.querySelector('#clickSkill');

const numberOfSkills = document.querySelectorAll('.skill').length;

for (var i = 0; i < numberOfSkills; i++) {
    document.querySelectorAll('.skill')[i].addEventListener('click', function () {
        var skillNumber = this.classList[0];
        console.log('skill ' + skillNumber);
        this.classList.toggle('skillExpanded');
        this.classList.toggle('skill');
        clickSkill.remove();
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

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var pageHeight = document.body.scrollHeight - window.innerHeight;
    var scrollPercent = scrollPosition / pageHeight;
    var progressBarWidth = scrollPercent * 100;
    document.getElementById('progressBar').style.width = progressBarWidth + '%';
  });

