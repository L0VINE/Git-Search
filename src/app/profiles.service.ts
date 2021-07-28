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
    return this.http.get<Idetails[]>(this.profileUrl+userName)
    
  }
 
}
// api.github.com/users/LOVINE?access_token=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 
// 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 