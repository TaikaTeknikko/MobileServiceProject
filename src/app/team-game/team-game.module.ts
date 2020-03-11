import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamGamePageRoutingModule } from './team-game-routing.module';

import { TeamGamePage } from './team-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamGamePageRoutingModule
  ],
  declarations: [TeamGamePage]
})
export class TeamGamePageModule {}
