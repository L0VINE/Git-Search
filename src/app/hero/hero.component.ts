import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  imagePath = "./assets/cubes.png"

  constructor() { }
  html_url = 'https://github.com/Awadh-Awadh'
  ngOnInit(): void {
  }

}
