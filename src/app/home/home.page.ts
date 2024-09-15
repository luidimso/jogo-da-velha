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
      if(this.turn == 1) {
        this.player1.push(position);
      } else {
        this.player2.push(position);
      }

      this.turn == 1 ? this.turn = 2 : this.turn = 1;

      console.log(this.player1, this.player2)
    }
  }

}
