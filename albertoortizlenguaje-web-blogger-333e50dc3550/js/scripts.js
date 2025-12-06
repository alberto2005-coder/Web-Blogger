let titles = ["Mi Empresa", "🏠| Home"];
let currentTitle = 0;

setInterval(() => {
    currentTitle = (currentTitle + 1) % titles.length;
    document.title = titles[currentTitle];
}, 10000);
