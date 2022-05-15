let balls = document.querySelectorAll('.ball');
let buttons = document.querySelectorAll('button');
let intervalNumber = document.querySelector('#interval-number');
let pickColor = document.querySelectorAll('input[type="color"]');

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

intervalNumber.addEventListener('keyup', () => {
    balls[0].firstChild.style.animationDuration = intervalNumber.value + 's';
    balls[1].firstChild.style.animationDuration = intervalNumber.value + 's';
    balls[2].firstChild.style.animationDuration = intervalNumber.value + 's';
    balls[3].firstChild.style.animationDuration = intervalNumber.value + 's';
    balls[4].firstChild.style.animationDuration = intervalNumber.value + 's';
    balls[5].firstChild.style.animationDuration = intervalNumber.value + 's';
    balls[6].firstChild.style.animationDuration = intervalNumber.value + 's';
})

pickColor.forEach((currentValue, index) => {
    if (index == 0) {
        currentValue.addEventListener('change', () => {
            const colorBall = currentValue.value;
            document.querySelector(":root").style.setProperty('--ball-red', colorBall);
        });
    } else if (index == 1) {
        currentValue.addEventListener('change', () => {
            const colorBall = currentValue.value;
            document.querySelector(":root").style.setProperty('--ball-orange', colorBall);
        });
    } else if (index == 2) {
        currentValue.addEventListener('change', () => {
            const colorBall = currentValue.value;
            document.querySelector(":root").style.setProperty('--ball-yellow', colorBall);
        });
    } else if (index == 3) {
        currentValue.addEventListener('change', () => {
            const colorBall = currentValue.value;
            document.querySelector(":root").style.setProperty('--ball-green', colorBall);
        });
    } else if (index == 4) {
        currentValue.addEventListener('change', () => {
            const colorBall = currentValue.value;
            document.querySelector(":root").style.setProperty('--ball-light-blue', colorBall);
        });
    } else if (index == 5) {
        currentValue.addEventListener('change', () => {
            const colorBall = currentValue.value;
            document.querySelector(":root").style.setProperty('--ball-blue', colorBall);
        });
    } else if (index == 6) {
        currentValue.addEventListener('change', () => {
            const colorBall = currentValue.value;
            document.querySelector(":root").style.setProperty('--ball-purple', colorBall);
        });
    }
});