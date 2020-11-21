document.querySelector('.detail__decrease').addEventListener('click', function(e) {
    e.preventDefault();
    let value = document.querySelector('.detail__count');
    if(Number(value.innerHTML) > 0) value.innerHTML = `${Number(value.innerHTML) - 1}`
})
document.querySelector('.detail__increase').addEventListener('click', function(e) {
    e.preventDefault();
    let value = document.querySelector('.detail__count');
    value.innerHTML = `${Number(value.innerHTML) + 1}`
})