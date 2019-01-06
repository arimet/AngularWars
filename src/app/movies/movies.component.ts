import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from './movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies.results;
    });
  }

}
