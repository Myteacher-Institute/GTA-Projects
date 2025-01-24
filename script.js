let imgs = document.querySelectorAll('.card-img img ')
let cardImg =  document.querySelectorAll('.card-img')
imgs.forEach((img, index) =>{
    img.addEventListener('click', () => {
        cardImg.forEach(card => card.classList.remove('active'));
        cardImg[index].classList.add('active')
    })
}) 
