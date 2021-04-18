class Movie {
	constructor(poster, title, type, year, id) {
		this.type = type;
		this.title = title;
		this.year = year;
		this.poster = poster;
		this.id = id;
	}
}

class ObjectMovies {
	selectOption;
	titleText;
	container;
	totalResults;
	movieObject;
	name;
	constructor() {
		this.apiKey = '6fee4b55';
		this.arrMovies = [];
		this.paginationActive = 1;
		this.start = 1;
		this.stop = 11;

		document.getElementById('btn').addEventListener('click', this.searchMovie);
	}
	searchMovie = () => {
		this.container = document.getElementById('container');
		this.titleText = document.getElementById('title').value;
		this.selectOption = document.getElementById('select').value;

		if (this.titleText === '' || this.selectOption === '') {
			if (document.querySelector('h2')) {
				document.querySelector('h2').remove();
			}
			if (document.getElementById('row')) {
				document.getElementById('row').remove();
			}
			if (document.getElementById('pagination')) {
				document.getElementById('pagination').remove();
			}
			let h2 = document.createElement('h2');
			h2.innerHTML = 'Fill in the field title or select the type!';
			h2.classList.add('center-align');
			h2.classList.add('grey-text');
			h2.classList.add('text-lighten-1');
			container.append(h2);
			let title = document.getElementById('title');
			title.value = '';
		} else {
			if (document.querySelector('h2')) {
				document.querySelector('h2').remove();
			}
			if (document.getElementById('row')) {
				document.getElementById('row').remove();
			}
			if (document.getElementById('pagination')) {
				document.getElementById('pagination').remove();
			}

			this.getMovies();
			let title = document.getElementById('title');
			title.value = '';
		}
	}
	getMovies = async () => {
		try {
			const response = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&page=${this.paginationActive}&type=${this.selectOption}&s=${this.titleText}`);
			//console.log(response);
			this.totalResults = +response.data.totalResults;
			//console.log(this.totalResults);
			if (response.data.Search === undefined) {
				if (document.getElementById('row')) {
					document.getElementById('row').remove();
				}
				if (document.getElementById('pagination')) {
					document.getElementById('pagination').remove();
				}
				let h2 = document.createElement('h2');
				h2.innerHTML = response.data.Error;
				h2.classList.add('erorr');
				h2.classList.add('center-align');
				h2.classList.add('grey-text');
				h2.classList.add('text-lighten-1');
				this.container.append(h2);
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
				//console.log(this.arrMovies);
				this.showMovies();
			}

		} catch (error) {
			console.log(error);
		}
	}
	showMovies = () => {
		if (document.querySelector('h2')) {
			document.querySelector('h2').remove();
		}
		if (document.getElementById('row')) {
			document.getElementById('row').remove();
		}
		if (document.getElementById('pagination')) {
			document.getElementById('pagination').remove();
		}
		let mainRow = document.createElement('div');
		mainRow.classList.add('row');
		mainRow.id = 'row';
		this.container.append(mainRow);

		let i = 0;
		for (let j = 0; j < 3; j++) {
			let row = document.createElement('div');
			row.classList.add('row');

			let k = 0;
			while (k < 4) {
				if (i > 9) {
					break;
				}
				let divCol = document.createElement('div');
				divCol.classList.add('col');
				divCol.classList.add('s3');

				let divCard = document.createElement('div');
				divCard.classList.add('card');
				divCard.classList.add('middle');
				divCard.classList.add('hoverable');

				let divImg = document.createElement('div');
				divImg.classList.add('card-image');
				let img = document.createElement('img');
				img.setAttribute('src', this.arrMovies[i].poster);
				img.setAttribute('width', '300');
				img.setAttribute('height', '450');
				divImg.append(img);
				divCard.append(divImg);

				let divContent = document.createElement('div');
				divContent.classList.add('card-content');

				let pType = document.createElement('p');
				pType.innerHTML = this.arrMovies[i].type;
				divContent.append(pType);

				let pTitle = document.createElement('p');
				pTitle.innerHTML = this.arrMovies[i].title;
				divContent.append(pTitle);

				let pYear = document.createElement('p');
				pYear.innerHTML = this.arrMovies[i].year;
				divContent.append(pYear);
				divCard.append(divContent);

				let divAction = document.createElement('div');
				divAction.classList.add('card-action');
				let a = document.createElement('a');
				a.classList.add('waves-effect');
				a.classList.add('waves-light');
				a.classList.add('btn');
				a.classList.add('modal-trigger');
				a.classList.add('hoverable');
				a.setAttribute('name', `${this.arrMovies[i].id}`);
				a.setAttribute('href', `#${this.arrMovies[i].id}`);
				a.innerHTML = 'Details';
				a.addEventListener('click', this.getModal);
				divAction.append(a);

				divCard.append(divAction);
				divCol.append(divCard);
				row.append(divCol);
				k++;
				i++;
			}
			mainRow.append(row);
		}
		this.showPagination();
	}
	getModal = async (event) => {
		//console.log(event);
		this.name = event.target.name;
		try {
			const response = await axios.get(`http://www.omdbapi.com/?i=${this.name}&apikey=${this.apiKey}`);
			//console.log(response);
			this.movieObject = {
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
			//console.log(this.movieObject);
			this.showModal();
		} catch (error) {
			console.error(error);
		}
	}
	showModal = () => {
		if (document.getElementById('modal')) {
			document.getElementById('modal').remove();
		}

		let modal = document.createElement('div');
		modal.classList.add('row');
		modal.id = 'modal';
		modal.addEventListener('click', this.closeModal);

		let divModal = document.createElement('div');
		divModal.id = this.name;
		divModal.classList.add('modal')
		divModal.classList.add('hoverable')
		divModal.style.width = '80%';
		divModal.style.display = 'block';
		divModal.style.position = 'relative';

		let rowH1 = document.createElement('div');
		rowH1.classList.add('row');
		let h1 = document.createElement('h3');
		h1.classList.add('center-align');
		h1.classList.add('grey-text');
		h1.classList.add('text-lighten-1');
		h1.innerHTML = 'Film info:';
		rowH1.append(h1);
		divModal.append(rowH1);

		let modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		let divRow = document.createElement('div');
		divRow.classList.add('row');

		let divColImg = document.createElement('div');
		divColImg.classList.add('col');
		divColImg.classList.add('s5');
		let img = document.createElement('img');
		img.setAttribute('src', this.movieObject.Poster);
		img.setAttribute('width', '100%');
		img.setAttribute('height', '100%');
		divColImg.append(img);
		divRow.append(divColImg);

		let divColcontent = document.createElement('div');
		divColcontent.classList.add('col');
		divColcontent.classList.add('s7');
		for (let key in this.movieObject) {
			if (key === 'Poster') {
				continue;
			}
			let row = document.createElement('div');
			row.classList.add('row');
			let col1 = document.createElement('div');
			col1.classList.add('col');
			col1.classList.add('s2');
			let col2 = document.createElement('div');
			col2.classList.add('col');
			col2.classList.add('s10');
			let p1 = document.createElement('p');
			let p2 = document.createElement('p');
			p1.innerHTML = `${key}:`;
			p1.style.fontWeight = 'bolder';
			p2.innerHTML = this.movieObject[key];
			col1.append(p1);
			col2.append(p2);
			row.append(col1);
			row.append(col2);
			divColcontent.append(row);
		}
		divRow.append(divColcontent);

		modalContent.append(divRow);
		divModal.append(modalContent);

		let divFooter = document.createElement('div');
		divFooter.classList.add('modal-footer');
		divFooter.classList.add('right');
		let a = document.createElement('a');
		a.id = 'close';
		a.setAttribute('href', '#!');
		a.classList.add('modal-action');
		a.classList.add('modal-close');
		a.classList.add('waves-effec');
		a.classList.add('waves-green');
		a.classList.add('modal-close');
		a.classList.add('btn');
		a.innerHTML = 'Close';
		// a.addEventListener('click', closeModal);
		divFooter.append(a);

		divModal.append(divFooter);
		modal.append(divModal);
		this.container.append(modal);
		//console.log(modal);
	}
	closeModal = (event) => {
		if (event.target.id === "modal" || event.target.id === 'close') {
			document.getElementById('modal').remove();
		}
	}
	getPagination = async (event) => {
		//console.log(event);
		this.paginationActive = +event.target.innerHTML;
		try {
			const response = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&page=${this.paginationActive}&type=${this.selectOption}&s=${this.titleText}`);
			//console.log(response);
			if (document.getElementById('row')) {
				document.getElementById('row').remove();
			}
			if (document.getElementById('pagination')) {
				document.getElementById('pagination').remove();
			}
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
			this.showMovies();
		} catch (error) {
			console.log(error);
		}
	}
	showPagination = () => {
		let pagination = document.createElement('div');
		pagination.id = 'pagination';
		pagination.classList.add('row');

		let ul = document.createElement('ul');
		ul.classList.add('pagination');
		ul.classList.add('center-align');

		let liLeft = document.createElement('li');
		liLeft.classList.add('waves-effect');
		liLeft.classList.add('hoverable');
		liLeft.addEventListener('click', this.movePagiation);
		let aLeft = document.createElement('a');
		aLeft.setAttribute('href', '#!');
		let iLeft = document.createElement('i');
		iLeft.classList.add('material-icons');
		iLeft.id = 'left';
		iLeft.innerHTML = 'chevron_left';
		aLeft.append(iLeft);
		liLeft.append(aLeft);
		ul.append(liLeft);

		for (let i = this.start; i < this.stop; i++) {
			let li = document.createElement('li');
			li.classList.add('waves-effect');
			li.classList.add('hoverable');
			let a = document.createElement('a');
			a.setAttribute('href', '#!');
			a.innerHTML = i;
			a.addEventListener('click', this.getPagination);
			li.append(a);
			if (this.paginationActive === i) {
				li.classList.add('active');
			}
			ul.append(li);
		}

		let liRight = document.createElement('li');
		liRight.classList.add('waves-effect');
		liRight.classList.add('hoverable');
		liRight.addEventListener('click', this.movePagiation);
		let aRight = document.createElement('a');
		aRight.setAttribute('href', '#!');
		let iRight = document.createElement('i');
		iRight.classList.add('material-icons');
		iRight.id = 'right';
		iRight.innerHTML = 'chevron_right';
		aRight.append(iRight);
		liRight.append(aRight);
		ul.append(liRight);

		let liTotalNumber = document.createElement('li');
		liTotalNumber.classList.add('active');
		let a = document.createElement('a');
		a.setAttribute('href', '#!');
		a.innerHTML = `${Math.round(this.totalResults / 10)}`;
		liTotalNumber.append(a);
		ul.append(liTotalNumber);

		pagination.append(ul);
		this.container.append(pagination);
	}
	movePagiation = (event) => {
		if (this.paginationActive > 1 && this.paginationActive <= Math.round(this.totalResults / 10)) {
			if (event.target.id === 'left') {
				this.paginationActive--;
				if (this.paginationActive <= this.start - 1) {
					this.start--;
					this.stop--;
				}
				console.log('Left');
				console.log(this.paginationActive);
				this.getMovies();
			}
		}
		if (this.paginationActive >= 1 && this.paginationActive < Math.round(this.totalResults / 10)) {
			if (event.target.id === 'right') {
				this.paginationActive++;
				if (this.paginationActive >= this.stop) {
					this.start++;
					this.stop++;
				}
				console.log('Right');
				console.log(this.paginationActive);
			}
			this.getMovies();
		}
	}
}

const objectMovies = new ObjectMovies();

