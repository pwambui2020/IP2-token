import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
private username: String
  constructor(private http: HttpClient) {
    this.username ='pwambui2020'
   }

  getData(x) {
    const url ="https://api.github.com/users/"+x +"?api_key="+environment.apikey;
    return this.http.get<any>(url)
  }

  getRepos (x){
    const url ="https://api.github.com/users/"+ x +"/repos?api_key="+environment.apikey;
    return this.http.get<any>(url)
  }
  }

