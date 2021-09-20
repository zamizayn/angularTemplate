import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  countryData :any;
  constructor(public user:UsersService) {
 
   }


  ngOnInit(): void {
    this.user.getDataFromAPi().subscribe(data=>{
      console.log('data'+data);
      this.countryData = data;
      
    })
  }

}
