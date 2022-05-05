let balls = document.querySelectorAll('.ball');
let buttons = document.querySelectorAll('button');

buttons.forEach((currentValue, index) => {
    if (index == 0) {
        currentValue.addEventListener('click', () => {
            balls[0].firstChild.style.animationName = 'lightcolor-one';
            balls[1].firstChild.style.animationName = 'lightcolor-two';
            balls[2].firstChild.style.animationName = 'lightcolor-three';
            balls[3].firstChild.style.animationName = 'lightcolor-four';
            balls[4].firstChild.style.animationName = 'lightcolor-five';
            balls[5].firstChild.style.animationName = 'lightcolor-six';
            balls[6].firstChild.style.animationName = 'lightcolor-seven';
        })
    } else if (index == 1) {
        currentValue.addEventListener('click', () => {
            balls[0].firstChild.style.animationName = 'light-off';
            balls[1].firstChild.style.animationName = 'light-off';
            balls[2].firstChild.style.animationName = 'light-off';
            balls[3].firstChild.style.animationName = 'light-off';
            balls[4].firstChild.style.animationName = 'light-off';
            balls[5].firstChild.style.animationName = 'light-off';
            balls[6].firstChild.style.animationName = 'light-off';
        })
    }
})