async function fetchAndInsertPages() {
    const arrayPages = [
        './partials/footer.html',
        './partials/coments.html',
        './partials/mading.html',
        './partials/tastes.html',
        './partials/description.html',
        './partials/hero.html',
        './partials/header.html',
    ]

    const data = await Promise.all(arrayPages.map(async el => {
        const response = await fetch(el)
        return response.text()
    }))

    for (let i = 0; i < data.length; i++) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(data[i], 'text/html')
        const importedContent = doc.querySelector('body').innerHTML
        if (i === 0) {
            document.querySelector('main').insertAdjacentHTML('afterend', importedContent)
        } else if (i === data.length - 1) {
            document.querySelector('body').insertAdjacentHTML('afterbegin', importedContent)
        } else {
            document.querySelector('main').insertAdjacentHTML('afterbegin', importedContent)
        }
    }
    return data
}
