import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: CardsComponent }]),
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
