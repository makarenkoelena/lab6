import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';//1
import {HttpService} from "./http.service";//2


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule//3
  ],
  providers: [HttpService],//4
  bootstrap: [AppComponent]
})
export class AppModule { }
