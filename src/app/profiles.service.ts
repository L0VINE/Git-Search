import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Idetails } from './profile';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  
    profileUrl = 'https://api.github.com/users/'
  constructor(private http:HttpClient) { }
  
  public getProfile(userName:string):Observable<Idetails[]>{
    return this.http.get<Idetails[]>(this.profileUrl+userName+'?access_token='+environment.token)
    
  }
 
}
// api.github.com/users/awadh-awadh?access_token=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