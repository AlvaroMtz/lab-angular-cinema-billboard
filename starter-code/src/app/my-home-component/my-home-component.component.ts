import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MoviesService } from '../services/movies.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService],
})
export class MyHomeComponentComponent implements OnInit {
  
  
  constructor( public router: Router, private listOfMovies: MoviesService) {}

  ngOnInit() {

    //console.log(this.listOfMovies);
    //console.log(typeof(this.listOfMovies.listOfMovies))
  }
  hola = this.listOfMovies.getMovies()


}
