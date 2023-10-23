async function fetchAndInsertPages() {
    const arrayPages = [
        './partials/header.html',
        './partials/hero.html',
        './partials/description.html',
        './partials/tastes.html',
        './partials/mading.html',
        './partials/cometns.html',
        './partials/footer.html'
    ];

    const data = await Promise.all(arrayPages.map(async el => {
        const response = await fetch(el);
        return response.text();
    }));

    data.forEach(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const importedContent = doc.querySelector('body').innerHTML;
        document.querySelector('body').insertAdjacentHTML('beforebegin', importedContent);
    });
}

fetchAndInsertPages().catch()

