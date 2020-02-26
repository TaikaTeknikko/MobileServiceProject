import { Component, OnInit } from '@angular/core';
import { Card } from 'src/card';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cards = Array<Card>();

  constructor(public cardsService: CardsService) {}

  ngOnInit() {
    this.cards = this.cardsService.cards;
  }

}
