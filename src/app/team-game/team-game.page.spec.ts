import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamGamePage } from './team-game.page';

describe('TeamGamePage', () => {
  let component: TeamGamePage;
  let fixture: ComponentFixture<TeamGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
