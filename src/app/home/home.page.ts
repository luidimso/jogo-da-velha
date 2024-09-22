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
  winner:number = 0;

  constructor() {}

  check(position:string) {
    if(!this.player1.includes(position) && !this.player2.includes(position) && this.winner == 0) {
      if(this.turn == 1) {
        this.player1.push(position);
      } else {
        this.player2.push(position);
      }

      if(this.ckeckIfWon()) {
        this.winner = this.turn;
      }

      this.turn == 1 ? this.turn = 2 : this.turn = 1;

      console.log(this.player1, this.player2)
    }
  }

  ckeckIfWon():boolean {
    let player = this.turn == 1 ? this.player1 : this.player2;
    let won:boolean = false;

    if(player.includes("11") && player.includes("12") && player.includes("13")) {
      won = true;
    } else if (player.includes("21") && player.includes("22") && player.includes("23")) {
      won = true;
    } else if (player.includes("31") && player.includes("32") && player.includes("33")) {
      won = true;
    } else if (player.includes("11") && player.includes("21") && player.includes("31")) {
      won = true;
    } else if (player.includes("12") && player.includes("22") && player.includes("32")) {
      won = true;
    } else if (player.includes("13") && player.includes("23") && player.includes("33")) {
      won = true;
    } else if (player.includes("11") && player.includes("22") && player.includes("33")) {
      won = true;
    } else if (player.includes("13") && player.includes("22") && player.includes("31")) {
      won = true;
    }

    return won;
  }

}
