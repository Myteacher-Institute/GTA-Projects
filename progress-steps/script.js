const prev = document.getElementById('prev');
const next = document.getElementById('next');
const line = document.querySelector('.line');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll('.active');

    line.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentStep === 1) {
        prev.disabled = true;
    } else if (currentStep === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

prev.addEventListener('click', () => {
    currentStep--;

    if (currentStep < 1) {
        currentStep = 1;
    }

    update();
});

next.addEventListener('click', () => {
    currentStep++;

    if (currentStep > circles.length) {
        currentStep = circles.length;
    }

    update();
});