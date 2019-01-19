import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movies/movie';
import { MoviesService } from '../services/movies.service';
import { StoreService } from '../services/store-service.service';
import { Character } from '../movies/character';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

    constructor(
        private movieService: MoviesService,
        private route: ActivatedRoute,
        private storeService: StoreService
    ) { }

    movie: Movie;
    idMovie: number;
    characters: Character[] = [];

    ngOnInit() {
        this.idMovie = parseInt(this.route.snapshot.paramMap.get('id'));
        this.getMovie(this.idMovie);
    }

    getMovie(idMovie: number): void {
        // On récupère le film du store
        this.movie = this.storeService.getMovie();

        // Si le film n'est pas défini on va le charger
        if (!this.movie) {

            this.movieService.getMovie(idMovie).subscribe((rez: Movie) => {
                console.log(rez);
                this.movie = rez as Movie;

                // On charge les personnages
                this.movie.characters.forEach(charac => {
                    this.movieService.getCharacterMovie(charac).subscribe((rez: Character) => {
                        this.characters.push(rez);
                    })
                });

            });
        } else {
            // On charge les personnages
            this.movie.characters.forEach(charac => {
                this.movieService.getCharacterMovie(charac).subscribe((rez: Character) => {
                    this.characters.push(rez);
                })
            });
        }
    }

}
