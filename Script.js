const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function playSound() {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3');
    audio.play();
}

function abrirListaNegra() {
    playSound();
    window.open('https://docs.google.com/spreadsheets/d/1_4typYQUWnpwSbFlFTVHSEil8JFFD8S2/edit?usp=drivesdk&ouid=115934938528591538356&rtpof=true&sd=true', '_blank');
}

function abrirFeedback() {
    document.querySelector('.feedback').classList.toggle('hidden');
}

function abrirInscricao() {
    document.querySelector('.inscricao').classList.toggle('hidden');
}

const fotoForm = document.getElementById('foto-form');
const galeria = document.getElementById('galeria');

fotoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo-evento').value;
    const fileInput = document.getElementById('foto-evento');
    const reader = new FileReader();

    reader.onload = function() {
        const img = document.createElement('img');
        img.src = reader.result;

        const caption = document.createElement('p');
        caption.textContent = titulo;

        galeria.appendChild(img);
        galeria.appendChild(caption);
    };

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
    }
});
