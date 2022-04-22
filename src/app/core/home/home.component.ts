import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cards = [2,3,4,5,6].map((n) => '/assets/img/card(' + n + ').jpg');
  constructor() { }
  ngOnInit(): void {
    console.log(this.cards)
  }

}
