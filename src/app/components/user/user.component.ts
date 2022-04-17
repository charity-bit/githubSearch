import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Repo } from '../../Repo';
import { User } from '../../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username:string = 'charity-bit'
  userDetails!:User;


  
  repos!:Repo[];
    
  constructor(private _githubService:GithubService ) { 
    this._githubService.username = 'charity-bit' ;

    
  }
 
  ngOnInit(): void {
    this._githubService.username = 'charity-bit' ;
  }

  getUserDetails(){
    
      this._githubService.username =  this.username ;
      this._githubService.getUser().subscribe((res:any)=>{
        this.userDetails= res;
        console.log(this.userDetails)
  
      });
  }

  getRepos(){
    this._githubService.username =  this.username;
    this._githubService.getRepos().subscribe((res)=>{
       this.repos = res;
    })
  }

 
}
