class Movie {
	constructor(poster, title, type, year, id) {
		this.type = type;
		this.title = title;
		this.year = year;
		this.poster = poster;
		this.id = id;
	}
}

export class Model {
	movieObject;//об'єкт для вивода додаткової інформація про фільм
	name; //властивість в яку буде поміщенно id знаєденого фільма і буде використовуватися для пошука додаткової інформації про фільм
	constructor() {
		this.apiKey = '6fee4b55';
		this.arrMovies = [];//масив в якому поміщаються об'єкти Movie
	}
	//асинхронний метод пошуку фільмів
	getMovies = async (paginationActive, titleText, selectOption) => {
		try {
			const response = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&page=${paginationActive}&type=${selectOption}&s=${titleText}`);
			if (response.data.Search === undefined) {
				this._arrMoviesChanged(response.data.Error, +response.data.totalResults);
			} else {
				this.arrMovies.length = 0;
				for (let i = 0; i < response.data.Search.length; i++) {
					const movie = new Movie(
						response.data.Search[i].Poster,
						response.data.Search[i].Title,
						response.data.Search[i].Type,
						response.data.Search[i].Year,
						response.data.Search[i].imdbID
					);
					this.arrMovies.push(movie);
				}
				this._arrMoviesChanged(this.arrMovies, +response.data.totalResults);
			}

		} catch (error) {
			console.log(error);
		}
	}
	//асинхронний метод пошуку додаткової інформації про фільм
	getMovieInfo = async (name) => {
		try {
			const response = await axios.get(`http://www.omdbapi.com/?i=${name}&apikey=${this.apiKey}`);
			let movieObject = {
				Title: response.data.Title,
				Released: response.data.Released,
				Genre: response.data.Genre,
				Country: response.data.Country,
				Director: response.data.Director,
				Writer: response.data.Writer,
				Actors: response.data.Actors,
				Awards: response.data.Awards,
				Poster: response.data.Poster
			};
			this._movieInfoChanged(movieObject);
		} catch (error) {
			console.error(error);
		}
	}
	bindArrMoviesChanged(callback) {
		this.onArrMoviesChanged = callback;
	}
	_arrMoviesChanged(arr, totalResults) {
		this.onArrMoviesChanged(arr, totalResults);
	}
	bindMovieInfoChanged(callback) {
		this.onMovieInfoChanged = callback;
	}
	_movieInfoChanged(obj) {
		this.onMovieInfoChanged(obj);
	}
}