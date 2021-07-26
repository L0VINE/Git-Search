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

  constructor(private profileService:ProfilesService, private repoService:RepoService, private http:HttpClient) { }

  ngOnInit(): void {
    this.profileService.getProfile(this.userName).subscribe(data=>{
    this.profiles = data;
     })
}
getUsers(userName){
  this.profileService.getProfile(this.userName).subscribe(data=>{
    this.profiles = data;
     })
}
getDetails(userName){
  this.repoService.getRepos(this.userName).subscribe(data=>{
    this.repos = data;
  })
}
SendUsers(userName){
  this.profileService.getProfile(this.userName).subscribe(data=>{
    this.profiles = data;
    this.userName = ''
     })
}
}
