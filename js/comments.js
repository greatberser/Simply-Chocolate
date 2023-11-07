function changeCommentsCardOnResize() {
    const mediaQueryPC = window.matchMedia('(min-width: 769px)')
    const mediaQueryTablet = window.matchMedia('(max-width: 768px)')
    const mediaQueryMobile = window.matchMedia('(max-width: 375px)')


    function handleResize() {
        const commentsCards = document.querySelector('.comments-cards')
        const commentsCard = `
            <li class="comments-card">
                <div class="comments-card__rectangle"></div>
                <div class="comments-card__img">
                    <img src="" alt="photo">
                    <span class="comments-card__name"></span>
                </div>
                <p class="comments-card__p"></p>
            </li>
        `

        if (mediaQueryPC.matches) {
            while (commentsCards.firstChild) {
                commentsCards.removeChild(commentsCards.firstChild)
            }
            for (let i = 0; i < 3; i++) {
                commentsCards.insertAdjacentHTML("afterbegin", commentsCard)
            }

        }

        if (mediaQueryTablet.matches) {
            while (commentsCards.firstChild) {
                commentsCards.removeChild(commentsCards.firstChild)
            }
            for (let i = 0; i < 2; i++) {
                commentsCards.insertAdjacentHTML("afterbegin", commentsCard)
            }
        }

        if (mediaQueryMobile.matches) {
            while (commentsCards.firstChild) {
                commentsCards.removeChild(commentsCards.firstChild)
            }
            for (let i = 0; i < 1; i++) {
                commentsCards.insertAdjacentHTML("afterbegin", commentsCard)
            }
        }
        fillComment()
    }

    window.addEventListener('resize', handleResize)
    handleResize()
}

// Slider

function updateCard(index, current, commentImg, commentName, commentP) {
    commentImg[index].src = `${peoples[current].photo}`
    commentName[index].innerHTML = `${peoples[current].name}`
    commentP[index].innerHTML = `${peoples[current].comment}`
}

function startPosition(commentsCardsChildren, commentImg, commentName, commentP, btnLeft) {
    let current = 0
    btnLeft.style.display = 'none'
    for (let i = 0; i < commentsCardsChildren.length; i++) {
        updateCard(i, current, commentImg, commentName, commentP)
        current++
    }
    return current
}

function fillComment() {
    const btnRight = document.querySelector('.btn.right')
    const btnLeft = document.querySelector('.btn.left')

    const commentsCardsChildren = document.querySelector('.comments-cards').children
    const commentImg = document.querySelectorAll('.comments-card__img img')
    const commentName = document.querySelectorAll('.comments-card__name')
    const commentP = document.querySelectorAll('.comments-card__p')

    let current = startPosition(commentsCardsChildren, commentImg, commentName, commentP, btnLeft)

    btnRight.onclick = () => {
        if (btnLeft.style.display === 'none') btnLeft.style.display = 'block'

        for (let i = 0; i < commentsCardsChildren.length; i++) {
            if (current >= peoples.length) {
                commentsCardsChildren[i].style.display = 'none'
            } else {
                updateCard(i, current, commentImg, commentName, commentP)
            }
            current++
            if (current === peoples.length) btnRight.style.display = 'none'
        }
    }

    btnLeft.onclick = () => {
        if (btnRight.style.display === 'none') btnRight.style.display = 'block'

        if (current <= commentsCardsChildren.length * 2 - 1) {
            current = 0
        } else current -= commentsCardsChildren.length * 2

        for (let i = 0; i < commentsCardsChildren.length; i++) {
            commentsCardsChildren[i].style.display = 'block'
            updateCard(i, current, commentImg, commentName, commentP)
            current++
            if (current <= commentsCardsChildren.length) btnLeft.style.display = 'none'
        }
    }
}

// Modal

function reviewModal() {
    const commentsButton = document.querySelector('.comments-btn')
    const modalBackground = document.querySelector('.modal-background')
    const commentsModal = document.querySelector('.modal')
    const modalXClose = document.querySelector('.modal-x_close')

    commentsButton.addEventListener('click', () => {
        commentsModal.style.display = 'block'
    })

    modalBackground.addEventListener('click', () => {
        commentsModal.style.display = 'none'
    })

    modalXClose.addEventListener('click', () => {
        commentsModal.style.display = 'none'
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && commentsModal.style.display === 'block') {
            commentsModal.style.display = 'none'
        }
    })
}