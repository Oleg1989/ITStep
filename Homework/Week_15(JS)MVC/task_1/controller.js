export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.onArrMoviesChanged(this.model.arrMovies);
        this.view.bindSearchMovieShowMovie(this.handlerShowMovie);
        this.view.bindDetailsGetMovieInfo(this.handlerGetMovieInfo);
        this.view.bindCloseShowMovieInfo();
        this.view.bindPagiationLeftRightShowMovies(this.handlerShowMovie);
        this.view.bindPagiationButtonsShowMovies(this.handlerShowMovie);
        this.model.bindArrMoviesChanged(this.onArrMoviesChanged);
        this.model.bindMovieInfoChanged(this.onMovieInfoChanged);

    }
    onArrMoviesChanged = (arrMovies, totalResults) => {
        this.view.showMovies(arrMovies, totalResults);
    };
    onMovieInfoChanged = (obj) => {
        this.view.showMovieInfo(obj);
    }
    handlerShowMovie = (paginationActive, titleText, selectOption) => {
        this.model.getMovies(paginationActive, titleText, selectOption);
    };
    handlerGetMovieInfo = (id) => {
        this.model.getMovieInfo(id);
    }
}