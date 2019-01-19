import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultSwapi } from '../resultSwapi';
import { Movie } from '../movies/movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Character } from '../movies/character';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private apiStarWarsMovie = 'https://swapi.co/api/films/';  // URL to web api

    constructor(private http: HttpClient) { }

	/**
     * Fonction qui récupère les films star wars
     */
    getMovies() {
        return this.http.get<ResultSwapi>(this.apiStarWarsMovie);
    }

    /**
     * Fonction qui récupère un film star wars
     */
    getMovie(idMovie: number) {
        console.log(idMovie);
        return this.http.get<Movie>(this.apiStarWarsMovie + idMovie);
    }

    /**
     *
     */
    getCharacterMovie(charac: string) {
        return this.http.get<Character>(charac);
    }
}
