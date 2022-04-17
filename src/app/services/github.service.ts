import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {User} from '../User';
import {Repo}  from '../Repo'

@Injectable({
  providedIn: 'root'
})
export class GithubService {



  username!:string
  repos!:Observable<Repo[]>;
  constructor(private http:HttpClient) { 
  }

  getUser(): Observable<User>{
     
    return this.http.get<User>(`${environment.base_url}/${this.username}?api_key=${environment.access_token}&limit=15`)

  }
  

  getRepos():Observable<Repo[]>{
  

    return this.http.get<Repo[]>(`${environment.base_url}/${this.username}/repos?api_key=${environment.access_token}&limit=5`)

  }

  getAllRepos():Observable<Repo[]>{
    return this.http.get<Repo[]>(`${environment.base_url}/${this.username}/repos?api_key=${environment.access_token}&limit=100`)

  }


  
}
