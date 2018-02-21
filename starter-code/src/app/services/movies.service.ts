import { Injectable } from '@angular/core';
import movies from '../../sample-movies'

@Injectable()
export class MoviesService {
    private listOfMovies: Array<any> = movies

    constructor() {}

    getMovies(){
        return this.listOfMovies ;
    }

    getMovie(id){
    let encontrado = false;
    let i = 0;
    while (!encontrado) {
        if (this.listOfMovies[i].id == id)
            encontrado = !encontrado;
        else
            i++;
    }
    return this.listOfMovies[i]
            
    };
}
