import { Injectable } from '@angular/core';
import { Card } from 'src/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards = Array<Card>();


  constructor() {
    this.cards.push(new Card(1, "Teemu", 1996, 5));
    this.cards.push(new Card(2, "Andi", 1994, 6));
    this.cards.push(new Card(3, "Tristan", 1999, 8));
    this.cards.push(new Card(4, "Sophie", 1998, 7));
    this.cards.push(new Card(5, "Jörö", 1996, 10));
    this.cards.push(new Card(6, "Niko", 1998, 2));
    this.cards.push(new Card(7, "Pekka", 1995, 8));
    this.cards.push(new Card(8, "Seppo", 1991, 5));
    this.cards.push(new Card(9, "Jorma", 1992, 10));
    this.cards.push(new Card(10, "Kalevi", 1999, 4));
    this.cards.push(new Card(11, "Sulevi", 1990, 8));
    this.cards.push(new Card(12, "Juha", 1988, 3));
    this.cards.push(new Card(13, "Matti", 1989, 1));
    this.cards.push(new Card(14, "Teppo", 1995, 9));
    this.cards.push(new Card(15, "Reijo", 1990, 8));
    this.cards.push(new Card(16, "Veikko", 1994, 5));
  }

  getElement(id: number) {
    
    for (const td of this.cards) {
      if (td.id === id) {
        return td;
      }
    }

  }

}
