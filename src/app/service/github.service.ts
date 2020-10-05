import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
private username: String
  constructor(private http: HttpClient) {
    this.username ='pwambui2020'
   }

  getData(x) {
  

    const url ="https://api.github.com/users/"+x;

    return this.http.get<any>(url)

  }

  getRepos (x){
    const url ="https://api.github.com/users/"+ x +"/repos";

    return this.http.get<any>(url)

  }
  }

