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
        const response = await fetch(el);
        return response.text();
    }));

    data.forEach(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const importedContent = doc.querySelector('body').innerHTML;
        document.querySelector('body').insertAdjacentHTML('afterbegin', importedContent);
    });
}

fetchAndInsertPages().catch()
