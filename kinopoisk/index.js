let filmlist = document.getElementById('movies');

let films = []
let count = 1

async function getFilms() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES',  {
        params: {
          page: count
        },
         headers: {
        'X-API-KEY': '7d6cc960-365a-40eb-856f-299f61cc01fb',
            'Content-Type': 'application/json',
    },

    })
    films = response.data.items
    showFilms()
}

function showFilms() {
    filmlist.innerHTML = ""
    for (let film of films) {
        let filmCard = document.createElement('div');
        let filmImg = document.createElement('div');
        let filmRete = document.createElement('div');
        let filmName = document.createElement('div');

        filmRete.classList.add('movie__average');
        filmName.classList.add('movie__title');
        filmCard.classList.add('movie');
        filmImg.classList.add('movie__cover-inner')
        filmImg.innerHTML=`<img src="${ film.posterUrl }" alt="" class="movie__cover">`
        filmRete.innerHTML=`${ film.ratingKinopoisk}`;
        filmName.innerHTML=`${ film.nameRu} (${ film.year})`;

        filmCard.append(filmImg, filmName, filmRete)

        filmlist.append(filmCard);
    }
}


function changePage() {
    let pageList = document.getElementsByClassName('page');

    async function change(event) {
        count = event.target.innerText
        await getFilms()

        for (let page of pageList) {
            page.classList.remove('active');
        }

        event.target.classList.add('active')
        window.scrollTo(0, 0);
    }

    for (let page of pageList) {

        page.addEventListener('click', change);
    }

}

async function searchFilm() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword',  {
        params: {
            keyword: searhinput.value
        },
        headers: {
            'X-API-KEY': '7d6cc960-365a-40eb-856f-299f61cc01fb',
            'Content-Type': 'application/json',
        },

    })
    films = response.data.films
    showFilms()

}
let buttonSbros = document.getElementById('sbros')

async function buttonCbros(){
    input.value = '';
    getFilms();
}
buttonSbros.addEventListener('click', buttonCbros)

let searchButton = document.getElementById('kop');
searchButton.addEventListener('click', searchFilm);
let searhinput = document.getElementById('pole');

getFilms()
changePage()
Sbros()
