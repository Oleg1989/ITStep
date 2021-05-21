import cuid from "cuid";
import { MovieItem } from "../interface/movieItemInterface"
import { DataItemType } from "../enum/typeEnum"

export class Movie implements MovieItem {
    id: string;
    title: string;
    desc: string;
    readonly type: DataItemType.Movie;
    gente: string;
    director: string;
    actors: string;

    constructor(Title: string, Desc: string, Genre: string, Director: string, Actors: string) {
        this.id = cuid();
        this.title = Title;
        this.desc = Desc;
        this.type = DataItemType.Movie;
        this.gente = Genre;
        this.director = Director;
        this.actors = Actors;
    }
}