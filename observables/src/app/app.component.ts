import { Component, OnInit } from '@angular/core';//1
import { HttpService } from "./http.service"//2

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  constructor(private httpService: HttpService){}
  students:any = [];
  weathers:any = [];

ngOnInit(){
  this.httpService.getStudentData().subscribe(data =>
  {
    this.students = data.students;
  })
 
  this.httpService.getWeatherData().subscribe(data =>
    {
      this.weathers = data.weather;
    })
}
}