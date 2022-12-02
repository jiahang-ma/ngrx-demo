import { Component, OnInit } from '@angular/core';

import {MoviesStore} from '../movies-page/movies.store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  providers: [MoviesStore]
})
export class TestComponent implements OnInit {

  constructor(private moviesStore: MoviesStore) { }

  ngOnInit(): void {
  }

  add() {
    this.moviesStore.addMovie({ name: 'test1'});
  }
}
