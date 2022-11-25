import { Component, VERSION, Input,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  paises : any;
  constructor(private http:HttpClient){}
    ngOninit(){
      this.http.get('https://api.covid19api.com/summary')
      .subscribe(resultado=>{this.paises=resultado;});
      


    }
  }
 

