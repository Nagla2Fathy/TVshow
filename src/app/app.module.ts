import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvComponent } from './tv/tv.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HiComponent } from './hi/hi.component';



@NgModule({
  declarations: [
    AppComponent,
    TvComponent,
    HiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
