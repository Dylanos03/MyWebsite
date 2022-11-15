document.querySelector('#btn').addEventListener('click', title);

const numberOfSkills = document.querySelectorAll('.skill').length;

for (var i = 0; i < numberOfSkills; i++){
    document.querySelectorAll('.skill')[i].addEventListener('click', function() {
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

