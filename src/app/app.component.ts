import { Component, OnInit } from '@angular/core';
import { GithubService } from './service/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  profile = { login: '',
    company: '',
    location: '',
    avatar_url: '',
    public_repos: '',
    public_gist: '',
    followers: '',
    following: '',
    email: '',
    bio: '',
    created_at: ''};
username: String ="wanjaumbatia"
  repos: any[]
  users: String[]

  constructor (private githubService:GithubService){}
  ngOnInit(): void {
    this.githubService.getData(this.username).subscribe((data) => {
      this.profile = data
      
    })

    this.githubService.getRepos(this.username).subscribe((data) => {
      console.log(data)
      this.repos = data
    })
  }

  getUsers() {
      

  }
}
