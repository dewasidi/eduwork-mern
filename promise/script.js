fetch('https://newsapi.org/v2/everything?q=apple&from=2022-09-14&to=2022-09-14&sortBy=popularity&apiKey=cbf084b54cc24806b3af1d5d05468cd5')

.then(res =>res.json())
.then((res) => {
    const news = res.articles;
    //console.log(news);
    let card = "";

    news.forEach((n) => {
        card += showNews(n);
    });
    const root = document.getElementById("row-data")
    root.innerHTML = card;
})

const searchButton = document.querySelector(".buttonGo");
searchButton.addEventListener("click", function(){
    const searchText = document.querySelector(".searchInput");
    const inputValue = searchText.value;

    fetch(`https://newsapi.org/v2/everything?q=${inputValue}&apiKey=cbf084b54cc24806b3af1d5d05468cd5`)
    .then((res) => res.json())
    .then((res) => {
        const news = res.articles;
        let card = "";

        news.forEach((n) => {
            card += showNews(n);
        });
        const root = document.getElementById("row-data")
        root.innerHTML = card;
    });
});

// function getNews(){
//     fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=cbf084b54cc24806b3af1d5d05468cd5')

//     .then(res =>res.json())
//     .then((res) => {

//         let searchInputTxt = document.getElementById('search-input').value.trim();
    
//         if(res.news) {
        
//         res.news.forEach((n) => {
//             card += showNews(n);
//         });
//         const root = document.getElementById("row-data")
//         root.innerHTML = card;
        
//     }
//     });
// }


function showNews(n){
    return `
            <div class="col-3 mt-3 justify-content-center">
            <div class="card" style="width: 18rem;">
            <img src="${n.urlToImage}" class="card-img-top p-2" alt="..." style=' height: 10rem; object-fit:cover;'>
            <div class="card-body">
                <h4 class="card-title">${n.title}</h4>
                <p class="card-title">${n.author}</span></p>
                <p class="card-text">${n.description}</p>
                <a href="${n.url}" class="btn btn-primary">Lanjut baca</a>
            </div>
                </div>
            </div>
            
            
    `;
    
}


