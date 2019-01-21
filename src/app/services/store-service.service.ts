import { Injectable } from '@angular/core';
import { Movie } from '../classe/movie';
import { Character } from '../classe/character';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    storedMovie: Movie;
    storedCharacter: Character;

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

    /**
     * Fonction qui set un movie en store
     */
    setCharacter(character: Character): void {
        this.storedCharacter = character;
    }

    /**
     * Fonction qui récupère le film en store
     */
    getCharacter(): Character {
        return this.storedCharacter;
    }
}
