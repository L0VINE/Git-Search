import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Idetails } from './profile';
import { access } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  
    profileUrl = 'https://api.github.com/users/'
  constructor(private http:HttpClient) { }
  
  public getProfile(userName:string):Observable<Idetails[]>{
    return this.http.get<Idetails[]>(this.profileUrl + userName +'/?=' +environment.token)
  }
}
