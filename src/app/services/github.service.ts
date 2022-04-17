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
  repos!:[];
  constructor(private http:HttpClient) { }

  getUser(): Observable<any>{
     
    return this.http.get(`${environment.base_url}/${this.username}?api_key=${environment.access_token}&limit=15`)

  }

  getRepos():Observable<Repo[]>{

    return this.http.get<Repo[]>(`${environment.base_url}/${this.username}/repos?api_key=${environment.access_token}&limit=15`)

  }

  
}
