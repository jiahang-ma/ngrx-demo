import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MoviesPageComponent} from './movies-page.component';

import {MoviesStore} from './movies.store';
import { MoviesChildModule } from './movies-child/movies-child.module';



@NgModule({
  declarations: [MoviesPageComponent],
  imports: [
    CommonModule,
    MoviesChildModule
  ],
  exports: [MoviesPageComponent]
})
export class MoviesPageModule { }
