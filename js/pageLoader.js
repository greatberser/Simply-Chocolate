async function fetchAndInsertPages() {
    const arrayPages = [
        './partials/header.html',
        './partials/main.html',
        './partials/description.html'
    ];

    const data = await Promise.all(arrayPages.map(async el => {
        const response = await fetch(el);
        return response.text();
    }));

    data.forEach(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const importedContent = doc.querySelector('body').innerHTML;
        document.querySelector('body').insertAdjacentHTML('beforeend', importedContent);
    });
}

fetchAndInsertPages().catch()

