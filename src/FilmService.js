export class FilmService {
  #BASE_URL = 'https://api.themoviedb.org/3/';

  #API_KEY = '5f00324c3530ad02b76dbaa7a82cb337';

  #typeRequest = {
    trends: 'trending/movie/week',
    search: 'search/movie',
    movieId: 'movie/',
    genres: 'genre/movie/list',
  };

  #filmInfo = {
    credits: '/credits',
    reviews: '/reviews',
  };

  getUrl(type) {
    return `${this.#BASE_URL}${this.#typeRequest[type]}?api_key=${
      this.#API_KEY
    }`;
  }

  getUrlSearch(type, query) {
    return `${this.#BASE_URL}${this.#typeRequest[type]}?api_key=${
      this.#API_KEY
    }&query=${query}`;
  }

  getUrlById(type, id) {
    return `${this.#BASE_URL}${this.#typeRequest[type]}${id}?api_key=${
      this.#API_KEY
    }`;
  }

  getUrlForInfo(type, id, info) {
    return `${this.#BASE_URL}${this.#typeRequest[type]}${id}${
      this.#filmInfo[info]
    }?api_key=${this.#API_KEY}`;
  }

  fetchFilmsOrGenres(type) {
    try {
      return fetch(this.getUrl(type)).then(response => response.json());
    } catch (error) {
      console.log(error.message);
    }
  }

  fetchFilmsOnSearch(type, query) {
    try {
      return fetch(this.getUrlSearch(type, query)).then(response =>
        response.json()
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  fetchFilmById(type, id) {
    try {
      return fetch(this.getUrlById(type, id)).then(response => response.json());
    } catch (error) {
      console.log(error.message);
    }
  }

  fetchFilmInfo(type, id, info) {
    try {
      return fetch(this.getUrlForInfo(type, id, info)).then(response =>
        response.json()
      );
    } catch (error) {
      console.log(error.message);
    }
  }
}
