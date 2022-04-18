import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Repo } from '../../Repo';
import { User } from '../../User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  userDetails!: User;
  repos!: Repo[];

  constructor(private _githubService: GithubService) {
  }

  ngOnInit(){
    this.getUserDetails('charity-bit')
  
   
  }

  getUserDetails(username:string){
    this._githubService.getUser(username);
    this.userDetails = this._githubService.user;

    this._githubService.getUserRepos(username);
    this.repos = this._githubService.userRepos;
   
  }
}