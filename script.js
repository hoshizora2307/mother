document.addEventListener('DOMContentLoaded', () => {
    const heartButton = document.getElementById('heart-button');

    heartButton.addEventListener('click', () => {
        for (let i = 0; i < 20; i++) {
            createFlyingHeart();
        }
    });

    function createFlyingHeart() {
        const heart = document.createElement('span');
        heart.classList.add('flying-heart');
        heart.innerHTML = '❤️';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        document.body.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});
