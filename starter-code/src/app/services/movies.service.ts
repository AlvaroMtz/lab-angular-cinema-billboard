import { Injectable } from '@angular/core';

export interface MovieInterface {
    id: Number;
    title: String;
    poster: String;
    synopsis: String;
    genres: Array<string>;
    year: Number;
    director: String;
    actors: Array<string>;
    hours: Array<string>;
    room: Number;
}

@Injectable()
export class MoviesService {
    movies: Array<MovieInterface> = [];
    constructor() { }

    getMovies(){
    }

    getMovie(id){
    let encontrado = false;
    let i = 0;
    while (!encontrado) {
        if (this.movies[i].id == id)
            encontrado = !encontrado;
        else
            i++;
    }
    return this.movies[i]
            
    };
}
