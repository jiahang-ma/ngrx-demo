import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import {MoviesChildComponent} from './movies-child.component';

@NgModule({
  declarations: [MoviesChildComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesChildComponent]
})
export class MoviesChildModule { }
