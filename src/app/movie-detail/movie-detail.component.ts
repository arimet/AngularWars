import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movies/movie';
import { ResultSwapi } from '../resultSwapi';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  movie: Movie;
  idMovie: number;

  ngOnInit() {
    this.idMovie = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getMovie(this.idMovie);
  }

  getMovie(idMovie: number): void {
    this.movieService.getMovie(idMovie).subscribe((rez: Movie) => {
      this.movie = rez as Movie;
    });
  }

}
