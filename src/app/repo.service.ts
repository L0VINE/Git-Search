import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRepos } from './repos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { access } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  profileUrl = 'https://api.github.com/users/'
  constructor(private http:HttpClient) { }



 public getRepos(userName:string):Observable<IRepos[]>{
   return this.http.get<IRepos[]>(this.profileUrl+userName+'/repos?='+ environment.token)
 }

}
