function removeTypewriterClass() {
    const typewriterElements = document.querySelectorAll('.typewriter');

    setTimeout(() => {
        typewriterElements.forEach(element => {
            const parent = element.parentNode;
            if (parent) {
                while (element.firstChild) {
                    parent.insertBefore(element.firstChild, element);
                }
                parent.removeChild(element);
            }
        });
    }, 2000);
}

function animateToCenter() {
    const wrappers = document.querySelectorAll('.wrappers');

    wrappers.forEach(wrapper => {
        wrapper.classList.add('animateToCenter');
    });

}

function animateDelText() {
    const wrappers = document.querySelectorAll('.wrappers');

    wrappers.forEach(wrapper => {
        wrapper.style.display = 'none';
    });
}

function animateLogo() {
    const logoWrapper = document.querySelector('.wrapper_logo');
    if (logoWrapper) {
        logoWrapper.style.opacity = '1';
    }
}

function animateAddText() {
    const main_text = document.querySelector('.main_text');
    if (main_text) {
        main_text.classList.add('main_text_visible');
    }
    const logoWrapper = document.querySelector('.wrapper_logo');
    if (logoWrapper) {
        setTimeout(() => {
            logoWrapper.classList.add('glitchWrapper_visible');
        }, 200);
    }
}



removeTypewriterClass();

setTimeout(animateToCenter, 4000);
setTimeout(animateLogo, 5800);
setTimeout(animateDelText, 6000);
setTimeout(animateAddText, 6000);
