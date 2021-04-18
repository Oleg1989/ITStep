export class View {
	totalResults;//кількість знайденних фільмів
	titleText;//тип (фільм, серіал, епізод)
	selectOption;//назва фільма або частина назви
	constructor() {
		this.paginationActive = 1;//початкове положення пагінації
		this.start = 1;//початок пагінації
		this.stop = 11;//кінець пагінації
		this.container = document.getElementById('container');//div з id = container в якому будуть виводитися фільми, пагінація і додаткова інформація про фільм

	}
	//метод вивода фільмів на екран
	showMovies = (arrMovies, totalResults) => {
		this.clearContainer();
		this.totalResults = totalResults;
		if (arrMovies.length !== 0 && typeof arrMovies !== 'string') {
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
					if (i > arrMovies.length - 1) {
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
					img.setAttribute('src', arrMovies[i].poster);
					img.setAttribute('width', '300');
					img.setAttribute('height', '450');
					divImg.append(img);
					divCard.append(divImg);

					let divContent = document.createElement('div');
					divContent.classList.add('card-content');

					let pType = document.createElement('p');
					pType.innerHTML = arrMovies[i].type;
					divContent.append(pType);

					let pTitle = document.createElement('p');
					pTitle.innerHTML = arrMovies[i].title;
					divContent.append(pTitle);

					let pYear = document.createElement('p');
					pYear.innerHTML = arrMovies[i].year;
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
					a.setAttribute('name', `${arrMovies[i].id}`);
					a.setAttribute('href', `#${arrMovies[i].id}`);
					a.textContent = 'Details';
					a.id = "details";
					//a.addEventListener('click', getMovieInfo);
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
		} else {
			this.showError(arrMovies);
		}
	}
	//метод вивода додаткової інформації на екран
	showMovieInfo = (movieObject) => {
		if (document.getElementById('movieInfo')) {
			document.getElementById('movieInfo').remove();
		}

		let movieInfo = document.createElement('div');
		movieInfo.classList.add('row');
		movieInfo.id = 'movieInfo';
		//movieInfo.addEventListener('click', this.closeMovieInfo);

		let divMovieInfo = document.createElement('div');
		//divMovieInfo.id = this.name;
		divMovieInfo.classList.add('modal')
		divMovieInfo.classList.add('hoverable')
		divMovieInfo.style.width = '80%';
		divMovieInfo.style.display = 'block';
		divMovieInfo.style.position = 'relative';

		let rowH1 = document.createElement('div');
		rowH1.classList.add('row');
		let h1 = document.createElement('h3');
		h1.classList.add('center-align');
		h1.classList.add('grey-text');
		h1.classList.add('text-lighten-1');
		h1.innerHTML = 'Film info:';
		rowH1.append(h1);
		divMovieInfo.append(rowH1);

		let modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		let divRow = document.createElement('div');
		divRow.classList.add('row');

		let divColImg = document.createElement('div');
		divColImg.classList.add('col');
		divColImg.classList.add('s5');
		let img = document.createElement('img');
		img.setAttribute('src', movieObject.Poster);
		img.setAttribute('width', '100%');
		img.setAttribute('height', '100%');
		divColImg.append(img);
		divRow.append(divColImg);

		let divColcontent = document.createElement('div');
		divColcontent.classList.add('col');
		divColcontent.classList.add('s7');
		for (let key in movieObject) {
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
			p2.innerHTML = movieObject[key];
			col1.append(p1);
			col2.append(p2);
			row.append(col1);
			row.append(col2);
			divColcontent.append(row);
		}
		divRow.append(divColcontent);

		modalContent.append(divRow);
		divMovieInfo.append(modalContent);

		let divFooter = document.createElement('div');
		divFooter.classList.add('modal-footer');
		divFooter.classList.add('right');
		let a = document.createElement('a');
		a.id = 'close';
		a.setAttribute('href', '#!');
		a.classList.add('modal-action');
		a.classList.add('waves-effec');
		a.classList.add('waves-green');
		a.classList.add('btn');
		a.innerHTML = 'Close';
		divFooter.append(a);

		divMovieInfo.append(divFooter);
		movieInfo.append(divMovieInfo);
		this.container.append(movieInfo);
	}
	//метод для виводу на екран самої пагінації
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
		let aLeft = document.createElement('a');
		aLeft.setAttribute('href', '#!');
		let iLeft = document.createElement('i');
		iLeft.classList.add('material-icons');
		iLeft.id = 'left';
		iLeft.textContent = 'chevron_left';
		aLeft.append(iLeft);
		liLeft.append(aLeft);
		ul.append(liLeft);

		for (let i = this.start; i < this.stop; i++) {
			let li = document.createElement('li');
			li.classList.add('waves-effect');
			li.classList.add('hoverable');
			let a = document.createElement('a');
			a.setAttribute('href', '#!');
			a.classList.add('pagination-button');
			a.textContent = i;
			li.append(a);
			if (this.paginationActive === i) {
				li.classList.add('active');
			}
			ul.append(li);
		}

		let liRight = document.createElement('li');
		liRight.classList.add('waves-effect');
		liRight.classList.add('hoverable');
		//liRight.addEventListener('click', this.movePagiation);
		let aRight = document.createElement('a');
		aRight.setAttribute('href', '#!');
		let iRight = document.createElement('i');
		iRight.classList.add('material-icons');
		iRight.id = 'right';
		iRight.textContent = 'chevron_right';
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
	//метод для руху по пагинації задопомогою стрілок вліво або вправо
	movePagiation = (event) => {
		if (this.paginationActive > 1 && this.paginationActive <= Math.round(this.totalResults / 10)) {
			if (event.target.id === 'left') {
				this.paginationActive--;
				if (this.paginationActive <= this.start - 1) {
					this.start--;
					this.stop--;
				}
			}
		}
		if (this.paginationActive >= 1 && this.paginationActive < Math.round(this.totalResults / 10)) {
			if (event.target.id === 'right') {
				this.paginationActive++;
				if (this.paginationActive >= this.stop) {
					this.start++;
					this.stop++;
				}
			}
		}
	}
	//метод для очищення контейнера перед виводом нової
	clearContainer = () => {
		if (document.querySelector('h2')) {
			document.querySelector('h2').remove();
		}
		if (document.getElementById('row')) {
			document.getElementById('row').remove();
		}
		if (document.getElementById('pagination')) {
			document.getElementById('pagination').remove();
		}
	}
	//метод для вивода помилок або додаткової інформації
	showError = (error) => {
		let h2 = document.createElement('h2');
		h2.innerHTML = error;
		h2.classList.add('center-align');
		h2.classList.add('grey-text');
		h2.classList.add('text-lighten-1');
		container.append(h2);
	}
	bindSearchMovieShowMovie(handler) {
		document.getElementById('btn').addEventListener("click", (event) => {
			if (event.target.id === 'btn') {
				this.titleText = document.getElementById('title').value;
				this.selectOption = document.getElementById('select').value;
				//перевіряємо чи ввели параметри пошуку
				if (this.titleText === '' || this.selectOption === '') {
					this.clearContainer();
					this.showError('Fill in the field title or select the type!');
					let title = document.getElementById('title');
					title.value = '';
					return false;
				} else {
					this.clearContainer();
					let title = document.getElementById('title');
					title.value = '';
					handler(this.paginationActive, this.titleText, this.selectOption);
				}
			}
		});
	}
	bindDetailsGetMovieInfo(handler) {
		this.container.addEventListener("click", (event) => {
			if (event.target.id === 'details') {
				handler(event.target.name);
			}
		});
	}
	bindCloseShowMovieInfo() {
		this.container.addEventListener("click", (event) => {
			if (event.target.id === "movieInfo" || event.target.id === 'close') {
				document.getElementById('movieInfo').remove();
			}
		});
	}
	bindPagiationLeftRightShowMovies(handler) {
		this.container.addEventListener("click", (event) => {
			if (this.paginationActive > 1 && this.paginationActive <= Math.round(this.totalResults / 10)) {
				if (event.target.id === 'left') {
					this.paginationActive--;
					if (this.paginationActive <= this.start - 1) {
						this.start--;
						this.stop--;
					}
				}
				handler(this.paginationActive, this.titleText, this.selectOption);
			}
			if (this.paginationActive >= 1 && this.paginationActive < Math.round(this.totalResults / 10)) {
				if (event.target.id === 'right') {
					this.paginationActive++;
					if (this.paginationActive >= this.stop) {
						this.start++;
						this.stop++;
					}
				}
				handler(this.paginationActive, this.titleText, this.selectOption);
			}
		});
	}
	bindPagiationButtonsShowMovies(handler) {
		this.container.addEventListener("click", (event) => {
			if (event.target.className === 'pagination-button') {
				this.paginationActive = +event.target.textContent;
				if (this.paginationActive === this.start && this.paginationActive !== 1) {
					this.start--;
					this.stop--;
				}
				if (this.paginationActive === this.stop - 1 && this.paginationActive !== Math.round(this.totalResults / 10)) {
					this.start++;
					this.stop++;
				}
				handler(this.paginationActive, this.titleText, this.selectOption);
			}
		});
	}

}