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



  user!:User;
  errorMessage!:string;
  repoName!:string
  repos!:Repo[];
  constructor(private http:HttpClient) { 
  }

  

  getUser(userName:string){
    const promise = new Promise<void>((resolve,reject)=>{
      this.http.get<User>(`${environment.base_url}/${userName}`,{
              headers:{
                Authorization: `token ${environment.access_token}`
              }
            }).subscribe({
               next:(res:any)=>{
                  this.user = res;
                 resolve();
               },
               error:(error:any)=>{
                 reject(error)
               },
               complete:() =>{
                 console.log("complete")
               }

            });
           
      
    })


    return promise;
  }

  getUserRepos(userName:string){
    const promise = new Promise<void>((resolve,reject)=>{
               this.http.get<Repo[]>(`${environment.base_url}/${userName}/repos`,{
                headers:{
                  Authorization: `token ${environment.access_token}`
                }
              }).subscribe({
                next:(res:any)=>{
                  this.repos = res;
                  console.log(this.repos);
                  resolve();
                },
                error:(error:any)=>{
                  reject(error)
                },
                complete:()=>{
                  console.log('complete')
                }
              })


    })


    
  
  }

  

  searchRepos(name:string){
    this.repoName = name;
     return this.http.get(`${environment.base_repo_url}${name}*`)
  }
  

  // getRepos():Observable<Repo[]>{
  

  //   return this.http.get<Repo[]>(`${environment.base_url}/${this.username}/repos?api_key=${environment.access_token}&limit=5`)

  // }

  // getAllRepos():Observable<Repo[]>{
  //   return this.http.get<Repo[]>(`${environment.base_url}/${this.username}/repos?api_key=${environment.access_token}&limit=100`)

  // }


  
}
