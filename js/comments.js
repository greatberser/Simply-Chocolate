function changeCommentsCardOnResize() {
    const mediaQueryPC = window.matchMedia('(min-width: 769px)')
    const mediaQueryTablet = window.matchMedia('(max-width: 768px)')
    const mediaQueryMobile = window.matchMedia('(max-width: 375px)')


    function handleResize() {
        const commentsCards = document.querySelector('.comments-cards')
        const commentsCard = document.querySelector('.comments-card')


        if (mediaQueryPC.matches && commentsCards.children.length === 2) {
            const cloneCommentsCard = commentsCard.cloneNode(true)
            commentsCards.appendChild(cloneCommentsCard)
            fillComment()
        }

        if (mediaQueryTablet.matches && commentsCards.contains(commentsCard) && commentsCard && commentsCards.children.length === 3) {
            commentsCards.removeChild(commentsCard)
            fillComment()
        }

        if (commentsCards.children.length === 1 && mediaQueryTablet.matches) {
            const cloneCommentsCard = commentsCard.cloneNode(true)
            commentsCards.appendChild(cloneCommentsCard)
            fillComment()
        }

        if (mediaQueryMobile.matches && commentsCard && commentsCards.contains(commentsCard) && commentsCards.children.length === 2) {
            commentsCards.removeChild(commentsCard)
            fillComment()
        }
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

        if (current <= commentsCardsChildren.length*2-1) {
            current = 0
        } else  current-=commentsCardsChildren.length*2

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
    const commentsModal =  document.querySelector('.modal')
    const modalXClose =  document.querySelector('.modal-x_close')

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