import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from './movie';
import { ResultSwapi } from '../resultSwapi';
import { MoviesService } from '../services/movies.service';
import { StoreService } from '../services/store-service.service';

/* Missing if you are using 'this.router.navigate' */

import { Router } from '@angular/router';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],

    encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {

    movies: Movie[];


    constructor(
        private movieService: MoviesService,
        private storeService: StoreService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getMovies();
    }

    /**
     * Fonction qui récupère la liste des films
     */
    getMovies(): void {
        this.movieService.getMovies().subscribe((rez: ResultSwapi) => {
            this.movies = rez.results as Movie[];
        });
    }

    /**
     * Fonction qui envoie sur la page de detail d'un film
     */
    goToMovieDetail(movie: Movie, index: number): void {
        this.storeService.setMovie(movie);
        this.router.navigate([`/movie/${index}`]);
    }

}
