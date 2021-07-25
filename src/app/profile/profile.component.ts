import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName:string = 'Awadh-Awadh'
  profiles: any = [];

  constructor(private profileService:ProfilesService, private http:HttpClient) { }

  ngOnInit(): void {
    this.profileService.getProfile(this.userName).subscribe(data=>{
    this.profiles = data
     console.log(data)
     })
  }
  getUsers(event:any){
    this.profileService.getProfile(this.userName).subscribe(data=>{
      this.profiles = data
       console.log(data)
       })
  }
}
