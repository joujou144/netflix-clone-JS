// TMDB API KEY
const API_KEY = 'api_key=30e4bd0e312d91a8eb6d6d24269921cb'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = BASE_URL+'/search/movie?'+API_KEY
// const form = document.getElementById('form')
// const searchInput = document.getElementById('search-input')

// Request movies 
const requests = {

  fetchTrending: `${BASE_URL}/discover/tv?with_genres=18&${API_KEY}`,
  fetchCrimeMovies: `${BASE_URL}/discover/movie?with_genres=80&${API_KEY}`,
  fetchKidsFamilyMovies: `${BASE_URL}/discover/movie?with_genres=10751&${API_KEY}`,
  fetchHorrorMovies:  `${BASE_URL}/discover/movie?with_genres=27&${API_KEY}`,
  fetchMusicals: `${BASE_URL}/discover/movie?with_genres=10402&${API_KEY}`,
}

// Search movies
// form.addEventListener('submit', (e) => {
//   e.preventDefault
//   const searchValue = searchInput.value
//   if(searchValue && searchValue !== '') {
//     getMovies(SEARCH_URL+searchValue)
//     searchValue =''
//   } else {
//     window.location.reload()
//   }
//   console.log(searchValue)
// })

// Sticky navbar
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav")
  nav.classList.toggle('active', scrollY > 0)
})

getHeroBanner(requests.fetchTrending)
// HERO BANNER
function getHeroBanner(url) {
  const hero = document.getElementById("hero")
  const heroTitle = document.getElementById("hero-title")
  const heroInfo = document.getElementById("hero-info")
  try {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data.results)
      // When page is refreshed the banner changes
  
      const setHero = data.results[Math.floor(Math.random() * data.results.length - 1)]
   
      if(setHero.backdrop_path == null) {
        setHero.backdrop_path = setHero.poster_path
        if(setHero.backdrop_path == null) {
          return
        }
      } 
      hero.style.backgroundImage = "url(" + IMG_URL + setHero.poster_path + ")"
      heroTitle.innerText = setHero.original_name
      heroInfo.innerText = setHero.overview
     
    })
  } catch (err) {
    console.log(err)
  }   
}

// Popular Movies
getPopularMovies(API_URL)
function getPopularMovies(url) {
  try {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const showMovies = data.results
        showMovies.forEach(movie => {
          const {title, poster_path, vote_average, overview} = movie
          const movieEl = document.createElement('div')
          movieEl.classList.add("movie")
          movieEl.innerHTML = `
          <div class="movie">
            <img src="${IMG_URL+poster_path}" alt="${title}">            
            
            <div class="movie-info">
              <div class="misc">
                <span class="${getRating(vote_average)}">${vote_average}</span>
                <button class="add-btn"><i class="las la-plus-circle"></i></button>
                <button class="thumbsup"><i class="las la-thumbs-up"></i></button>
              </div>              
              <p class="overview">${overview}</p>
            </div>
          </div>
          `
          const popular = document.getElementById("popular-container")
          popular.appendChild(movieEl)
        })         
      })
  } catch (err) {
    console.log(err)
  }
}

// Crime Movies
getCrimeMovies(requests.fetchCrimeMovies)
function getCrimeMovies(url) {
  try {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const showMovies = data.results
        showMovies.forEach(movie => {
          const {title, poster_path, vote_average, overview } = movie
          const movieEl = document.createElement('div')
          movieEl.classList.add("movie")
          movieEl.innerHTML = `
          <div class="movie">
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
              <div class="misc">
                <span class="${getRating(vote_average)}">${vote_average}</span>
                <button class="add-btn"><i class="las la-plus-circle"></i></button>
                <button class="thumbsup"><i class="las la-thumbs-up"></i></button>
              </div>              
              <p class="overview">${overview}</p>
            </div>
          </div>
          `
          const crime= document.getElementById("crime-container")
          crime.appendChild(movieEl)
        })
      })
  } catch (err) {
    console.log(err)
  }
}

// Comedy Movies
getComedyMovies(requests.fetchKidsFamilyMovies)
function getComedyMovies(url) {
  try {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const showMovies = data.results
        showMovies.forEach(movie => {
          const { title, poster_path, vote_average, overview } = movie

          const movieEl = document.createElement("div")
          movieEl.classList.add("movie")
          movieEl.innerHTML = `
          <div class="movie">
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
              <div class="misc">
                <span class="${getRating(vote_average)}">${vote_average}</span>
                <button class="add-btn"><i class="las la-plus-circle"></i></button>
                <button class="thumbsup"><i class="las la-thumbs-up"></i></button>
              </div>              
              <p class="overview">${overview}</p>
            </div>
          </div>
          `
          const family = document.getElementById("family-container")
          family.appendChild(movieEl)
        })
        
      })
  } catch (err) {
    console.log(err)
  }
}

// Horror Films
getHorrorMovies(requests.fetchHorrorMovies)
function getHorrorMovies(url) {
  try {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const showMovies = data.results
        showMovies.forEach(movie => {
          const {title, poster_path, vote_average, overview} = movie
          const movieEl = document.createElement("div")
          movieEl.classList.add("movie")
          movieEl.innerHTML = `
          <div class="movie">
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
              <div class="misc">
                <span class="${getRating(vote_average)}">${vote_average}</span>
                <button class="add-btn"><i class="las la-plus-circle"></i></button>
                <button class="thumbsup"><i class="las la-thumbs-up"></i></button>
              </div>              
              <p class="overview">${overview}</p>
            </div>
          </div>
          `
          const horror = document.getElementById("horror-container")
          horror.appendChild(movieEl)
        })
      })
  } catch (err) {
    console.log(err)
  }
}

// Musicals
getMusicals(requests.fetchMusicals)
function getMusicals(url) {
  try {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        showMovies = data.results
        showMovies.forEach(movie => {
          const {title, poster_path, vote_average, overview} = movie
          const movieEl = document.createElement("div")
          movieEl.classList.add("movie")
          movieEl.innerHTML = `
          <div class="movie">
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
              <div class="misc">
                <span class="${getRating(vote_average)}">${vote_average}</span>
                <button class="add-btn"><i class="las la-plus-circle"></i></button>
                <button class="thumbsup"><i class="las la-thumbs-up"></i></button>
              </div>              
              <p class="overview">${overview}</p>
            </div>
          </div>
          `
          const musical = document.getElementById("musical-container")
          musical.appendChild(movieEl)
        })
      })
  } catch (err) {
    console.log(err)
  }
}

// Rating
function getRating(vote) {
  if(vote >= 8) {
    return "green"
  } else if(vote >=5) {
    return "orange"
  } else {
    return "red"
  }
}
