let filmlist = document.getElementById('movies');

let films = []

async function getFilms() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES',  {
         headers: {
        'X-API-KEY': '7d6cc960-365a-40eb-856f-299f61cc01fb',
            'Content-Type': 'application/json',
    },

    })
    films = response.data.items
    showFilms()
}

function showFilms() {
    for (let film of films) {
        let filmCard = document.createElement('div');
        let filmRete = document.createElement('div');
        let filmName = document.createElement('h2');

        filmRete.classList.add('film');
        filmName.classList.add('filmName');
        filmCard.classList.add('filmCard');
        filmCard.innerHTML=`<img src="${ film.posterUrl }" alt="">`

        filmlist.append(filmCard);

        filmCard.classList.add('filmCard');
        filmRete.classList.add('filmRete');
        filmName.classList.add('filmName');
    }
}
getFilms()
