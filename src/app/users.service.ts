import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getDataFromAPi(){
    let url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(url);
  }
}
