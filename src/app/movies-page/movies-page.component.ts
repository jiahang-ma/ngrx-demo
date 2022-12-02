import { Component } from '@angular/core';
import { MoviesStore } from './movies.store';

@Component({
  selector: 'app-movies',
  template: `
    <li *ngFor="let movie of (movies$ | async)">
      {{ movie.name }}
    </li>
    <hr>
    <li>moviesPerPage: {{moviesPerPage$ | async}}</li>
    <button (click)="add()">add</button>
    <app-movies-child></app-movies-child>
  `,
  providers: [MoviesStore]
})
export class MoviesPageComponent {
  movies$ = this.moviesStore.movies$;
  moviesPerPage$ = this.moviesStore.moviesPerPage$;
 
  constructor(private readonly moviesStore: MoviesStore) {}

  add() {
    this.moviesStore.addMovie({ name: 'movie1'});
  }
}
