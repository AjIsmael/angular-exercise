import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './app/account';

@Injectable()
export class ListService {
  constructor(private http: HttpClient) { }
  url = './assets/profile.json';
  getList() {
    return this.http.get<Account[]>(this.url)
}
}
