import { Injectable } from '@angular/core';
import { Movie } from '../movies/movie';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    storedMovie: Movie;

    constructor() { }

    /**
     * Fonction qui set un movie en store
     */
    setMovie(movie: Movie): void {
        this.storedMovie = movie;
    }

    /**
     * Fonction qui récupère le film en store
     */
    getMovie(): Movie {
        return this.storedMovie;
    }
}
