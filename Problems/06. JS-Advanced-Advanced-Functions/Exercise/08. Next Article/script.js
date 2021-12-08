function getArticleGenerator(articles) {
    const resDiv = document.getElementById('content');
    const arr = articles;

    return () => {
        if (arr.length !== 0) {
            const article = document.createElement('article');
            resDiv.appendChild(article)
            article.innerHTML += arr.shift();
        }
    }
}
