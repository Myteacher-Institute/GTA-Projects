

let imgs= document.querySelectorAll(".eachImg img");
let eachImg = document.querySelectorAll('.eachImg');

imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        eachImg.forEach( each => each.classList.remove('active'));
        eachImg[index].classList.add('active');
    })
})