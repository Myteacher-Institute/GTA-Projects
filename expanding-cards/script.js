// Expanding Cards Start
let imgs = document.querySelectorAll('.card-img img');
let cardImgs = document.querySelectorAll('.card-img');

imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        cardImgs.forEach(card => card.classList.remove('active'));
        cardImgs[index].classList.add('active');
    });
});
// Expanding Cards Stop