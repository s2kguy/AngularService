import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGuessScreenComponent } from './player-guess-screen.component';

describe('PlayerGuessScreenComponent', () => {
  let component: PlayerGuessScreenComponent;
  let fixture: ComponentFixture<PlayerGuessScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGuessScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGuessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
