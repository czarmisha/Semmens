let switchers = document.querySelectorAll('.catTabs__switcher');
for (let i = 0; i < switchers.length; i++) {
    const element = switchers[i];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        for (let j = 0; j < switchers.length; j++) {
            const el = switchers[j];
            el.classList.remove('active');
            let el_tab_id = el.getAttribute('data-toggle')
            let el_tab = document.querySelector(String(el_tab_id));
            el_tab.style.display = 'none';
        }
        element.classList.add('active');
        let tab_id = this.getAttribute('data-toggle')
        let tab = document.querySelector(String(tab_id));
        tab.style.display = 'block'
    })
}