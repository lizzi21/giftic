function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(heart);
}

for (let i = 0; i < 25; i++) {
    createHeart();
}

function showNextSection() {
    document.querySelector('.first-section').style.display = 'none';
    document.querySelector('.next-section').style.display = 'block';
    document.querySelector('.image-container').style.display = 'block';
    document.body.style.height = 'auto';
}


document.getElementById('glowing-button').addEventListener('click', function() {
    const message = document.getElementById('hidden-message');
    message.classList.add('show-text');  // Показываем сообщение
});

