import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../cards.service';
import { ToastController } from '@ionic/angular';
import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

    id: number;
    title: string;
    birthYear: number;
    power: number;
    random: number;

    enemy_id: number;
    enemy_title: string;
    enemy_birthYear: number;
    enemy_power: number;
    enemy_random: number;

    wins: number;
    draws: number;
    losses: number;
    score: number;

    message: string;

    disableItem = false;

  constructor(public router: Router, public cardsService: CardsService, public toastController: ToastController) { }

  ngOnInit() {
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.score = 0;

    this.drawRandom();
  }

  playBirth(){ //gets triggered when birth value is triggered
    console.log("clicktest Birth");
    this.random = 0;
    this.random = Math.floor((Math.random() * 16) + 1);
    //make sure that enemy and player card are not the same
    while(this.id == this.random){
      this.random = Math.floor((Math.random() * 16) + 1);
    }
    console.log("enemy id:" + this.random);

    //give ID to the enemy card. 
    const enemy_id: number = this.random;
    let display: any = this.cardsService.getElement(enemy_id);

    //give values to the attributes of the enemy element
    this.enemy_id = display.id;
    this.enemy_title = display.title;
    this.enemy_birthYear = display.birthYear;
    this.enemy_power = display.power;

    //This is a win/draw/lose counter
    if(this.birthYear < this.enemy_birthYear){
      console.log("Win");
      this.message = "You win!";
      this.wins = this.wins + 1;
    } else if (this.birthYear == this.enemy_birthYear){
      console.log("Draw");
      this.message = "It's a draw!";
      this.draws = this.draws + 1;
    } else {
      console.log("Lose");
      this.message = "You Lose!";
      this.losses = this.losses + 1;
    }
    //calculates the actual score
    this.score = this.wins*100 - this.losses*100;

    this.presentToast();
    //disables players access to card
    this.disableItem = true;
      
  }

  playPower(){
    console.log("clicktest Power");
    this.random = 0;
    this.random = Math.floor((Math.random() * 16) + 1);
    //make sure that enemy and player card are not the same
    while(this.id == this.random){
      this.random = Math.floor((Math.random() * 16) + 1);
    }
    console.log("enemy id:" + this.random);

    //give ID to the enemy card. 
    const enemy_id: number = this.random;
    let display: any = this.cardsService.getElement(enemy_id);

    //give values to the attributes of the enemy element
    this.enemy_id = display.id;
    this.enemy_title = display.title;
    this.enemy_birthYear = display.birthYear;
    this.enemy_power = display.power;

    //This is a win/draw/lose counter
    if(this.power > this.enemy_power){
      console.log("Win");
      this.wins = this.wins + 1;
      this.message = "You win!";
    } else if (this.power == this.enemy_power){
      console.log("Draw");
      this.draws = this.draws + 1;
      this.message = "It's a draw!";
    } else {
      console.log("Lose");
      this.losses = this.losses + 1;
      this.message = "You lose!";
    }
    //calculates the actual score
    this.score = this.wins*100 - this.losses*100;

    this.presentToast();

    this.disableItem = true;

      
  }
  drawRandom(){
    console.log("draw a new card");
    //random number is generated to draw a random card in the app
    this.random = Math.floor((Math.random() * 16) + 1);
    console.log(this.random);

    //now the id gets the random picked number from above
    const id: number = this.random;
    let display: any = this.cardsService.getElement(id);

    //give values to the attributes of the displayed element
    this.id = display.id;
    this.title = display.title;
    this.birthYear = display.birthYear;
    this.power = display.power;
    return id;


  }

  async presentToast(){
    const toast = await this.toastController.create({
      position: 'top',
      message: this.message,
      buttons: [
        {
          side: 'end',
          text: 'Play again',
          handler: () => {
            this.drawRandom();
            this.disableItem = false;
            this.enemy_birthYear = 0;
            this.enemy_power = 0;
            this.enemy_title = '???';
          }
        }
      ]
    });
    toast.present();
  }

}
