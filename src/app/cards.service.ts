import { Injectable } from '@angular/core';
import { Card } from 'src/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards = Array<Card>();


  constructor() {
    this.cards.push(new Card(1, "Teemu", 1996, 5, 5, 3.20));
    this.cards.push(new Card(2, "Andi", 1994, 6, 4, 5300));
    this.cards.push(new Card(3, "Tristan", 1999, 8, 2, 6320));
    this.cards.push(new Card(4, "Sophie", 1998, 7, 3, 1000000));
    this.cards.push(new Card(5, "Jörö", 1996, 10, 1, 0.05));
    this.cards.push(new Card(6, "Niko", 1998, 2, 8, 1000));
    this.cards.push(new Card(7, "Pekka", 1995, 8, 2, 12000));
    this.cards.push(new Card(8, "Seppo", 1991, 5, 5, 100));
    this.cards.push(new Card(9, "Jorma", 1992, 6, 3, 2800));
    this.cards.push(new Card(10, "Kalevi", 1999, 4, 6, 6300));
    this.cards.push(new Card(11, "Sulevi", 1990, 8, 2, 2000));
    this.cards.push(new Card(12, "Juha", 1988, 3, 7, 1200));
    this.cards.push(new Card(13, "Matti", 1989, 1, 9, 4500));
    this.cards.push(new Card(14, "Teppo", 1995, 9, 1, 7000));
    this.cards.push(new Card(15, "Reijo", 1990, 8, 2, 2990));
    this.cards.push(new Card(16, "Veikko", 1994, 5, 5, 1000));
  }

  getElement(id: number) {
    
    for (const td of this.cards) {
      if (td.id === id) {
        return td;
      }
    }

  }

}
