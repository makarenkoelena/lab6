import { Injectable } from '@angular/core';
import { Http } from "@angular/http";//1
import { Observable } from "rxjs";//2
import "rxjs/add/operator/map";//3

@Injectable()
export class HttpService {

  constructor(private http:Http) { }//4

  //5
  getStudentData():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonblob/9da2ecb4-1bde-11e8-88aa-1bc453662c1b")
    .map(res=>res.json())
  }

  getWeatherData():Observable<any>{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID86ad4b284a335b1b698e04256299a014")
    .map(res=>res.json())
  }
}
