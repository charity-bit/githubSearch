import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Repo } from '../../Repo'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username!:string ;
  repos!:Repo[];
  


  
  constructor(private _githubService:GithubService ) { 
    
  }
 
  ngOnInit(): void {

    this._githubService.username =  'charity-bit'
  }

  getUserDetails(){
   this._githubService.username =  this.username ;
    this._githubService.getUser().subscribe((res)=>{
      console.log(res)
    })

  }

  getRepos(){
    this._githubService.username =  this.username;
    this._githubService.getRepos().subscribe((res)=>{
       this.repos = res;
    })


  }

 
}
