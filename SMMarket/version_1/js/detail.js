let btns = document.querySelectorAll('.showDetail');
for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.productDetail').classList.add('active')
    })
}
document.querySelector('.productDetail__decrease').addEventListener('click', function(e) {
    e.preventDefault();
    let value = document.querySelector('.productDetail__count');
    if(Number(value.innerHTML) > 0) value.innerHTML = `${Number(value.innerHTML) - 1}`
})
document.querySelector('.productDetail__increase').addEventListener('click', function(e) {
    e.preventDefault();
    let value = document.querySelector('.productDetail__count');
    value.innerHTML = `${Number(value.innerHTML) + 1}`
})
document.querySelector('.productDetail__add').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.productDetail').classList.remove('active')
})