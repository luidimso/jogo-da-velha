import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  turn:number = 1;
  player1:string[] = [];
  player2:string[] = [];

  constructor() {}

  check(position:string) {
    if(!this.player1.includes(position) && !this.player2.includes(position)) {
      console.log(position);
      this.player1.push(position)
    }
  }

}
