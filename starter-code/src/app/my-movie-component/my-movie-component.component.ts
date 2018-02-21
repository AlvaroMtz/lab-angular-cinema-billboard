import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MoviesService } from '../services/movies.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {
  id:number;
  movie:Array<any>;
  constructor(public route:ActivatedRoute, private listOfMovies: MoviesService) {
    this.route.params.subscribe( p => {
     
      this.id = p.id;
      console.log(this.id)
      this.movie = this.listOfMovies.getMovie(this.id)
    });
   }

  ngOnInit() {
  }
  

}
