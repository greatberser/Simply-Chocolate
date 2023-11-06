// Bar

function navBar() {
    const bar = document.querySelector('.header-menu')
    const nav = document.querySelector('.nav')

    bar.onclick = () => {
        nav.style.display = 'block'
        bar.style.display = 'none'
    }

    [...nav.children].forEach(el => el.onclick = () => {
        nav.style.display = 'none'
        bar.style.display = 'block'
    })
}