import { Component, OnInit } from '@angular/core';
import {faStar,faCode,faEye,faLink,faFolder} from '@fortawesome/free-solid-svg-icons';
import { GithubService } from 'src/app/services/github.service';
import { Repo } from '../../Repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
 
  repos!: Repo[];


  // icons
  faEye = faEye;
  faStar = faStar;
  faCode = faCode;
  faFolder = faFolder;
  faLink = faLink;

  constructor(private _githubService:GithubService) { }

  ngOnInit(): void {
    this.getRepos("fight")
  }



  getRepos(repoName:string){
      this._githubService.searchRepos(repoName).then(
        ()=>{
             this.repos = this._githubService.repos;
             console.log(this.repos);
        },
        (error)=>{
          alert("An error occured please try again");
        }
      )

  }

}
