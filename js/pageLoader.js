async function pageLoader () {
  await fetch('./partials/header.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const importedContent = doc.querySelector('body').innerHTML;
      document.querySelector('body').insertAdjacentHTML('beforeend', importedContent);
    })
  await fetch('./partials/main.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const importedContent = doc.querySelector('body').innerHTML;
      document.querySelector('body').insertAdjacentHTML('beforeend', importedContent);
    });
  await fetch('./partials/description.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const importedContent = doc.querySelector('body').innerHTML;
      document.querySelector('body').insertAdjacentHTML('beforeend', importedContent);
    });
}
pageLoader().catch()