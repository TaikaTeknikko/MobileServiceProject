import { Injectable } from '@angular/core';
import { Card } from 'src/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards = Array<Card>();


  constructor() {
    this.cards.push(new Card(1, "Teemu", 1996, 5, 5, 3.20,"Teemu.jpg",1));
    this.cards.push(new Card(2, "Andi", 1994, 6, 4, 5300,"Andi.jpg",2));
    this.cards.push(new Card(3, "Tristan", 1999, 10, 0, 6320, "Tristan.jpg",1));
    this.cards.push(new Card(4, "Sophie", 1998, 7, 3, 1000000, "Sophie.jpg",2));
    this.cards.push(new Card(5, "Jörö", 1996, 10, 1, 0.05, "Jere.jpg",1));
    this.cards.push(new Card(6, "Niko", 1998, 2, 8, 1000, "Niko.jpg",2));
    this.cards.push(new Card(7, "Jarkko", 1995, 8, 2, 12000, "Jarko.jpg",1));
    this.cards.push(new Card(8, "Elina", 1991, 5, 5, 100, "Elina.jpg",2));
    this.cards.push(new Card(9, "Krampfer", 1997, 6, 3, 2800, "Krampfer.jpg",1));
    this.cards.push(new Card(10, "Ali", 1995, 4, 6, 6300, "Ali.jpg",2));
    this.cards.push(new Card(11, "Jeff", 1990, 8, 2, 2000, "Jeff.PNG",1));
    this.cards.push(new Card(12, "Juha", 1988, 3, 7, 1200, "Juha.jpg",2));
    this.cards.push(new Card(13, "Atte", 1989, 1, 9, 4500, "Atte.jpg",1));
    this.cards.push(new Card(14, "Juuso", 1995, 9, 1, 7000, "Juuso.jpg",2));
    this.cards.push(new Card(15, "Tim", 1990, 8, 2, 2990, "Tim.PNG",1));
    this.cards.push(new Card(16, "Jonne", 1994, 5, 5, 1000, "Jonne.jpg",2));
  }

  getElement(id: number) {
    
    for (const td of this.cards) {
      if (td.id === id) {
        return td;
      }
    }

  }

}
