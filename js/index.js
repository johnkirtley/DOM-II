// Your code goes here

const mapImg = document.querySelector('.map');
const text = document.querySelector('.text-content');
const images = document.querySelectorAll('img');
const buttons = document.querySelectorAll('.btn');
const nav = document.querySelector('.nav');
const headingTwo = document.querySelectorAll('h2');
const headingFour = document.querySelectorAll('h4');
const destination = document.querySelector('.destination');
const navLinks = document.querySelectorAll('a');
const body = document.querySelector('body');

// EVENT 1
mapImg.addEventListener('click', function () {
    text.style.color = 'blue';
})

// EVENTS 2 & 3
images.forEach(i => {
    i.addEventListener('mouseenter', () => {
        i.style.transform = 'scale(1.2)';
    })
    i.addEventListener('mouseleave', () => {
        i.style.transform = 'scale(1)';
    })
})

// EVENT 4
buttons.forEach(i => {
    i.addEventListener('dblclick', () => {
        i.style.backgroundColor = 'red';
    })
})


// EVENTS 5 & 6
buttons.forEach(i => {
    window.addEventListener('keydown', () => {
        i.style.color = 'yellow';
    })
    window.addEventListener('keyup', () => {
        i.style.color = 'white';
    })
})


// EVENT 7
window.addEventListener('resize', () => {
    nav.style.display = 'none';
})


// EVENT 8
images.forEach(i => {
    i.addEventListener('drag', () => {
        text.style.backgroundColor = 'yellow';
    })
})


// EVENT 9
images.forEach(i => {
    i.addEventListener('dragend', () => {
        text.style.backgroundColor = 'white';
    })
})

// EVENT 10
headingTwo.forEach(i => {
    i.addEventListener('copy', () => {
        alert('You just copied some text!')
    })
})

// EVENT PROPAGATION
destination.addEventListener('click', () => {
    destination.style.backgroundColor = 'green';
})

headingFour.forEach(i => {
    i.addEventListener('click', () => {
        i.style.color = 'red';
        event.stopPropagation();
    })
})

// PREVENT DEFAULT
navLinks.forEach(i => {
    i.addEventListener('click', () => {
        event.preventDefault();
    })
})

// GREENSOCK EVENTS
body.addEventListener('click', () => {
    document.querySelector('h1').style.color = 'red';
    gsap.to("h1", {
        rotateX: 180,
        yoyo: true,
        repeat: 1
    })
})