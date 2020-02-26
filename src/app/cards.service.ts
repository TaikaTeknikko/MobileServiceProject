import { Injectable } from '@angular/core';
import { Card } from 'src/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards = Array<Card>();


  constructor() {
    this.cards.push(new Card(1, "Teemu", 1996, 10));
    this.cards.push(new Card(2, "Andi", 1995, 11));
    this.cards.push(new Card(3, "Jorma", 1975, 8));
    this.cards.push(new Card(4, "Seppo", 1985, 5));
  }

  getElement(id: number) {
    
    for (const td of this.cards) {
      if (td.id === id) {
        return td;
      }
    }

  }

}
