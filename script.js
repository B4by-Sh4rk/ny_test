function getParameters() {
    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let clearString = urlString.split('?')[0];
    let queryString = new URLSearchParams(paramString);

    for (let pair of queryString.entries()) {
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
            const all_wrapp = document.querySelector('.all_wrapp');
            if (logoWrapper) {
                setTimeout(() => {
                    logoWrapper.classList.add('glitchWrapper_visible');
                }, 100);
            }
            if (all_wrapp) {
                setTimeout(() => {
                    all_wrapp.classList.add('all_wrapp_show');
                    setInterval(generateNumbers, 10000);
                }, 600);
            }
        }



        removeTypewriterClass();

        setTimeout(animateToCenter, 4000);
        setTimeout(animateLogo, 5800);
        setTimeout(animateDelText, 6000);
        setTimeout(animateAddText, 6000);

        function generateNumbers() {
            const container = document.querySelector('#all_wrapp');
            if (!container) {
                console.error('Элемент с классом .all_wrapp не найден!');
                return;
            }

            container.innerHTML = '';

            for (let i = 1; i <= 14; i++) {
                const numberDiv = document.createElement('div');
                numberDiv.className = 'number';

                const img = document.createElement('img');
                img.src = `./numb_${i}.png`;
                img.alt = `${i}`;

                const randomMarginLeft = Math.floor(Math.random() * (95 - 0 + 1)) + 0;
                numberDiv.style.marginLeft = `${randomMarginLeft}vw`;

                numberDiv.appendChild(img);
                container.appendChild(numberDiv);
            }
        }
    }

    window.history.pushState('', '', clearString);
}
getParameters()

