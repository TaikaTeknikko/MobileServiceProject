import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: number;
  title: string;
  birthYear: number;
  power: number;
  speed: number;
  wealth: number;
  pictureName: string;

  constructor(public activatedRoute: ActivatedRoute, public cardsService: CardsService) {

  }

  ngOnInit() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    let display: any = this.cardsService.getElement(id);

    this.id = display.id;
    this.title = display.title;
    this.birthYear = display.birthYear;
    this.power = display.power;
    this.speed = display.speed;
    this.wealth = display.wealth;
    this.pictureName = display.pictureName;
    
  }

}
