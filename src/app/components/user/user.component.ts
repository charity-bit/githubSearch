import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import {faStar,faCode,faEye,faSearch,faFolder} from '@fortawesome/free-solid-svg-icons';
import { Repo } from '../../Repo';
import { User } from '../../User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {


  userDetails!: User;
  topics!:string;
  repos!: Repo[];
  defaultUser!:User;

  // icons
  faEye = faEye;
  faStar = faStar;
  faCode = faCode;
  faSearch = faSearch;
  faFolder = faFolder;

  constructor(private _githubService: GithubService) {


  }
  ngOnInit(){
     this.getUserDetails('j')
  }



  getUserDetails(username:string){
    this._githubService.getUser(username).then(

      (success)=>{
        this.userDetails = this._githubService.user;
        console.log(success)
      },
      (error)=>{
        alert("User not found");
        console.log(error)
      }
    );

    this._githubService.getUserRepos(username).then(
      ()=>{
        this.repos = this._githubService.userRepos;
      },
      (error)=>{
        console.log(error)
      }
    )
   
  }



}