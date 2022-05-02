import { Component, OnInit } from '@angular/core';
import { navList } from './nav-list';
import { ContentMetadata } from '../content-metadata';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  menuButtonState:boolean = false;

  contentList: ContentMetadata[] = [];
  
  clickMenuButton():void {
    if(this.menuButtonState == false) {
        document.getElementById("sidenav-list")!.style.width = "250px";
        this.menuButtonState = true
    } else {
        document.getElementById("sidenav-list")!.style.width = "0";
        this.menuButtonState = false;
    }
  }

  navList = navList;

}
