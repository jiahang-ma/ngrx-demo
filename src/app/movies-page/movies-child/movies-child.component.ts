import { Component, OnInit } from '@angular/core';
import {MoviesStore} from '../movies.store';

@Component({
  selector: 'app-movies-child',
  templateUrl: './movies-child.component.html'
})
export class MoviesChildComponent implements OnInit {

  constructor(private moviesStore: MoviesStore) { }

  ngOnInit(): void {
  }

  add() {
    this.moviesStore.addMovie({name: 'movies-child1'})
  }

}
