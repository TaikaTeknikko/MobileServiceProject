import { Injectable } from '@angular/core';
import { Card } from 'src/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards = Array<Card>();


  constructor() {
    this.cards.push(new Card(1, "Teemu", 1996, 10));
    this.cards.push(new Card(2, "Andi", 1994, 11));
    this.cards.push(new Card(3, "Jorma", 1975, 8));
    this.cards.push(new Card(4, "Seppo", 1985, 5));
    this.cards.push(new Card(5, "Teemu1", 1996, 10));
    this.cards.push(new Card(6, "Andi1", 1994, 11));
    this.cards.push(new Card(7, "Jorma1", 1975, 8));
    this.cards.push(new Card(8, "Seppo1", 1985, 5));
    this.cards.push(new Card(9, "Teemu2", 1996, 10));
    this.cards.push(new Card(10, "Andi2", 1994, 11));
    this.cards.push(new Card(11, "Jorma2", 1975, 8));
    this.cards.push(new Card(12, "Seppo2", 1985, 5));
    this.cards.push(new Card(13, "Teemu3", 1996, 10));
    this.cards.push(new Card(14, "Andi3", 1994, 11));
    this.cards.push(new Card(15, "Jorma3", 1975, 8));
    this.cards.push(new Card(16, "Seppo3", 1985, 5));
  }

  getElement(id: number) {
    
    for (const td of this.cards) {
      if (td.id === id) {
        return td;
      }
    }

  }

}
