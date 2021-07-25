import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private repoService: RepoService) { }
  repos:[] = []
  ngOnInit(): void {
  }

}
