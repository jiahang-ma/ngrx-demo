import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import {MoviesPageModule} from './movies-page/movies-page.module';
import { MoviesChildModule } from './movies-page/movies-child/movies-child.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
