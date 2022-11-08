document.querySelector('#btn').addEventListener('click', title);

function title() {
    document.querySelector('#heroTitle').classList.toggle('font1')
    document.querySelector('#heroTitle').classList.toggle('font2');
    console.log('click');
}