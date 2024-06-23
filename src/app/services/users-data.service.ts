import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
