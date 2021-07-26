import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { RepoService } from '../repo.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName:string = ''
  profiles: any = [];
  repos: any = [];
  errorMsg;

  constructor(private profileService:ProfilesService, private repoService:RepoService, private http:HttpClient) { }

  ngOnInit(): void {
}
// public getUsers(userName){
//  let promise = new Promise(resolve,reject)=>{
//    this.profileService.getProfile(this.userName).toPromise().then(response=>{
//      this.profiles = response;
//      resolve()
//     },error=>{
//       this.errorMsg = "An error was Encountered"
//     }
     
//    })
//    return promise
//  }

public getUsers(event) {
   let promise = new Promise((resolve:any , reject) => {
   this.profileService.getProfile (this.userName).toPromise().then(response => {
     this.profiles = response;
      resolve();
    },
    error => {
      this.errorMsg = 'An error was encountered';
      reject(error)
    }
  );
  });
  return promise;
}
getDetails(userName){
  this.repoService.getRepos(this.userName).subscribe(data=>{
    this.repos = data;
  })
}
SendUsers(userName){
  this.profileService.getProfile(this.userName).subscribe(data=>{
    this.profiles = data;
     })
}
}
