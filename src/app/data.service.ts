import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  givemeJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }

  givemeUsers(){
    return this.http.get('https://randomuser.me/api/')
  }
}
