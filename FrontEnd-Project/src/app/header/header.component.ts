import {Component, OnInit} from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() {
  }

  // private slideIndex = 1;

  ngOnInit() {
  }



}
