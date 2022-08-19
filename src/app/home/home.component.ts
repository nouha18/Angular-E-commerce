import { Component, OnInit,Renderer2  } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';
import { Emitters } from '../emitters/emitters';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartData, ChartOptions } from 'chart.js';
import { AuthService } from '../auth.service';
interface Country{
  name: string;
  flag:string; //
  area:number;
  population: number;

};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [`
  ngb-progressbar {
      margin-top: 5rem;
  }
  `]
})
export class HomeComponent implements OnInit {

  url = 'http://localhost:4000/results';
  searchTerm:string=""; //
  countries :Country[] = [];
  allCountries: Country[] = [];
  term:string='';
message: string = "your 're logged in!"
  page = 4;
    page1 = 5;
    focus:any;
    focus1:any;
    focus2:any;
    model: Date = new Date();
    isLoggedIn=false;
    isLoggedOut=true;
      //data=Data[];
      chartOptions: ChartOptions = {
      responsive: true,
      plugins: {
          title: {
            display: true,
            text: 'Monthly Deployed Apps System Data',
          },
        },
      };
      salesData: ChartData<'bar'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
          { label: 'Laptop', data: [200, 100, 400, 50, 90] },
          { label: 'AC', data: [500, 400, 350, 450, 650] },
          { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
        ],
      };
      TasksData: ChartData<'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
          { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
          { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
          { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
        ],
      };

    constructor( private renderer : Renderer2,private http: HttpClient,authService : AuthService) {}


    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;

    }

    onSearch(value:string):void{
      this.http.get<Country[]>('../../assets/countries.json')
      .subscribe((data: Country[]) => {
        this.countries = data;
        this.allCountries = this.countries;
        console.table(data);
      });
      this.countries = this.allCountries.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
    }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/v2.5/showuser',{withCredentials:true}).subscribe(
      (res:any)=> {console.log(res);
      this.message = `Salut ${res.email}`;
      Emitters.authEmitter.emit(true);
    },
      err =>{console.log(err);
      Emitters.authEmitter.emit(false);
      this.message = err}
    );

    let authToken = localStorage.getItem('access_token');

    if(authToken !== null){
        this.isLoggedIn=true;
        this.isLoggedOut=false;
    }
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
        input_group[i].children[0].addEventListener('focus', function (){
            input_group[i].classList.add('input-group-focus');
        });
        input_group[i].children[0].addEventListener('blur', function (){
            input_group[i].classList.remove('input-group-focus');
        });
    }


    // this.http.get(this.url).subscribe((res: Data[]) => {
    //   res.forEach(y => {
    //     this.month.push(y.month);
    //     this.price.push(y.price);
    //   });
    //   this.chart = new Chart('canvas', {
    //     type: 'line',
    //     data: {
    //       labels: this.month,
    //       datasets: [
    //         {
    //           data: this.price,
    //           borderColor: '#3cba9f',
    //           fill: false
    //         }
    //       ]
    //     },
    //     options: {

    //       }

    //   });
    // });



  }

}
