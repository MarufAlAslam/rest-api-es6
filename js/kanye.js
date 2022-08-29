const showQuotes = quote => {
    const quoteParagraph = document.getElementById('quote');
    quoteParagraph.innerText = `"${quote}"`;
}
const loadKanye = () => {
    const url = "https://api.kanye.rest/";
    fetch(url).then(response => response.json()).then(data => showQuotes(data.quote));
}

loadKanye();