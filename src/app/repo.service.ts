import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRepos } from './repos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  profileUrl = 'https://api.github.com/users/'
  constructor(private http:HttpClient) { }



 public getRepos(userName:string):Observable<IRepos[]>{
   return this.http.get<IRepos[]>(this.profileUrl+userName+'/repos')
 }

}
