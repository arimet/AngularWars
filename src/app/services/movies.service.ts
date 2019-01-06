import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../movies/movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private apiStarWars = 'https://swapi.co/api/films/';  // URL to web api

    constructor(private http: HttpClient) { }

	/**
     * Fonction qui récupère les films star wars
     */
    getMovies() {
        return this.http.get(this.apiStarWars)
    }
}
