import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../cards.service';
import { ToastController } from '@ionic/angular';
import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { Storage } from '@ionic/storage';

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
    speed: number;
    wealth: number;
    pictureName: string;
    random: number;

    enemy_id: number;
    enemy_title: string;
    enemy_birthYear: number;
    enemy_power: number;
    enemy_speed: number;
    enemy_wealth: number;
    enemy_unknownPicture: string;
    enemy_pictureName: string;
    enemy_random: number;

    wins: number;
    draws: number;
    losses: number;
    score: number;
    saveScore: Array<number>;

    message: string;

    disableItem = false;

  constructor(public router: Router, 
    public cardsService: CardsService, 
    public toastController: ToastController,
    public storage: Storage) { }

  ngOnInit() {
    this.wins = 0;
    this.draws = 0;
    this.losses= 0;
    this.score= 0;
    this.saveScore = [this.wins, this.draws, this.losses, this.score];
    console.log(this.saveScore);
    console.log("start");

    this.storage.set('saveScore', [this.wins, this.draws, this.losses, this.score]);
    
    this.resetEnemyCard();
    this.drawRandom();
    console.log("this is the storage" +this.storage);
  }

  //also reset the Storage!!!!!!!!
  resetScoreboard(){
    this.wins = 0;
    this.draws = 0;
    this.losses= 0;
    this.score= 0;
    this.saveScore = [this.wins, this.draws, this.losses, this.score];
    
  }

  playBirth(){ 

    this.generateEnemyCard();

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

    this.saveScore = [this.wins, this.draws, this.losses, this.score];
    //this.storage.set('saveScore', JSON.stringify(this.saveScore));

    this.presentToast();
    //disables players access to card
    this.disableItem = true;
      
  }

  playPower(){
    
    this.generateEnemyCard();

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
    this.saveScore = [this.wins, this.draws, this.losses, this.score];
    this.presentToast();
    this.disableItem = true;
  }

  playSpeed(){
    
    this.generateEnemyCard();

    //This is a win/draw/lose counter
    if(this.speed > this.enemy_speed){
      console.log("Win");
      this.wins = this.wins + 1;
      this.message = "You win!";
    } else if (this.speed == this.enemy_speed){
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
    this.saveScore = [this.wins, this.draws, this.losses, this.score];
    this.presentToast();
    this.disableItem = true;
  }

  playWealth(){
    
    this.generateEnemyCard();

    //This is a win/draw/lose counter
    if(this.wealth > this.enemy_wealth){
      console.log("Win");
      this.wins = this.wins + 1;
      this.message = "You win!";
    } else if (this.wealth == this.enemy_wealth){
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
    this.saveScore = [this.wins, this.draws, this.losses, this.score];
    this.presentToast();
    this.disableItem = true;
  }

  drawRandom(){
    //random number is generated to draw a random card in the app
    this.random = Math.floor((Math.random() * 16) + 1);

    //now the id gets the random picked number from above
    const id: number = this.random;
    let display: any = this.cardsService.getElement(id);

    //give values to the attributes of the displayed element
    this.id = display.id;
    this.title = display.title;
    this.birthYear = display.birthYear;
    this.power = display.power;
    this.speed = display.speed;
    this.wealth = display.wealth;
    this.pictureName = display.pictureName;
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
            this.resetEnemyCard();
            
          }
        }
      ]
    });
    toast.present();
  }

  generateEnemyCard() {

    this.random = 0;
    this.random = Math.floor((Math.random() * 16) + 1);

    //makes sure that enemy and player card are not the same
    while(this.id == this.random){
      this.random = Math.floor((Math.random() * 16) + 1);
    }

    //give ID to the enemy card. 
    const enemy_id: number = this.random;
    let display: any = this.cardsService.getElement(enemy_id);

    //give values to the attributes of the enemy element
    this.enemy_id = display.id;
    this.enemy_title = display.title;
    this.enemy_birthYear = display.birthYear;
    this.enemy_power = display.power;
    this.enemy_speed = display.speed;
    this.enemy_wealth = display.wealth;
    this.enemy_pictureName = display.pictureName;
  }

  resetEnemyCard() {
    this.enemy_title = 'Unknown Enemy';
    this.enemy_birthYear = 0;
    this.enemy_power = 0;
    this.enemy_speed = 0;
    this.enemy_wealth = 0;
    this.enemy_pictureName = "Unknown.jpg";
    
  }

}
