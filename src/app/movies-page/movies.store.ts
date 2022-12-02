import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";

type Movie = {name: string};

interface MoviesState {
    movies: Movie[];
    moviesPerPage: number;
  }
   
  @Injectable()
  export class MoviesStore extends ComponentStore<MoviesState> {
    
    constructor() {
      super({movies: [{name: 'name01'}], moviesPerPage: 10});
    }
   
    readonly movies$: Observable<Movie[]> = this.select(state => state.movies);
    readonly moviesPerPage$: Observable<number> = this.select(state => state.moviesPerPage);

    readonly updateMoviesPerPage = this.updater((state, moviesPerPage: number) => ({
        ...state,
        moviesPerPage, // updates with new value
    }));

    readonly addMovie = this.updater((state, movie: Movie) => ({
        movies: [...state.movies, movie],
        moviesPerPage: state.moviesPerPage
    }));
  }