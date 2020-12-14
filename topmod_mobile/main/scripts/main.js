const toggleBtn = document.querySelector('.header__toggleBtn');
        const menu = document.querySelector('.menu');

        toggleBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            if (menu.classList.contains('active')) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = 'auto';
        });

        const tabBtns = document.querySelectorAll('.categories_btn');
        const tabContents = document.querySelectorAll('.categories');

        for (let i = 0; i < tabBtns.length; i++) {
            const element = tabBtns[i];
            element.addEventListener('click', function () {
                for (let j = 0; j < tabBtns.length; j++) {
                    tabBtns[j].classList.remove('active');                    
                    tabContents[j].classList.remove('show');                    
                }
                this.classList.add('active');
                let tabId = this.getAttribute('data-toggle');
                document.querySelector(tabId).classList.add('show');
            })
        }