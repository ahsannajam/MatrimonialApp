import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matrimonial App';
  users: any;

  constructor(private http: HttpClient){
    setTheme('bs4'); // or 'bs5'
  }
  ngOnInit() {
    this.getUsers();
}

getUsers(){
  this.http.get('https://localhost:7266/api/Users').subscribe(response =>{
      this.users = response;
    },error => {
      console.log(error);
    })
    //throw new Error('Method not implemented.');
  }
}