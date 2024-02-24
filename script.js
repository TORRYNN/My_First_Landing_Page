var menu=document.querySelector('#menu');
var bg=document.querySelector('#bg');

// menu.addEventListener('click', function() {
//     bg.style.transform='scale(.8)';
//     bg.style.borderRadius='20px';
//     bg.style.boxShadow='0 150px 45px -100px rgba(0,0,0,0.2)';
// })
var isTransformed = false;

menu.addEventListener('click', function() {
    if (isTransformed) {
        // Revert back to the original state
        bg.style.transform = 'scale(1)';
        bg.style.borderRadius = '0';
        bg.style.boxShadow = 'none';
    } else {
        // Apply the transformation
        bg.style.transform = 'scale(0.8)';
        bg.style.borderRadius = '20px';
        bg.style.boxShadow = '0 150px 45px -100px rgba(0,0,0,0.2)';
    }

    // Toggle the state
    isTransformed = !isTransformed;
});

var tl = gsap.timeline();

tl.from('.navitem', {
    stagger: 0.3,
    duration: 2,
    y: 20,
    delay: 8,
    ease: 'expo.inOut',
    opacity: 0
})
.from('#smline', {
    width: 0,
    duration: 1,
    ease: 'expo.inOut',
}, '-=2')
.from('.leftitem', {
    stagger: 0.3,
    duration: 2,
    y: 20,
    ease: 'expo.inOut',
    opacity: 0
}, '-=2')
.from('#right img', {
    duration: 2,
    scale: 1.05,
    ease: 'expo.inOut',
    opacity: 0
}, '-=2');
