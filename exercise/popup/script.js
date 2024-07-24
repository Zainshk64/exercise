let popup = document.getElementById('popup')
let but = document.getElementById('btn')
let ok = document.getElementById('ok')


but.addEventListener('click', (e) => {

    popup.classList.add('open1')
})
ok.addEventListener('click', (e) => {

    popup.classList.remove('open1')
})
