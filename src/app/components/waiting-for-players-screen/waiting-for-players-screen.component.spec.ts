import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingForPlayersScreenComponent } from './waiting-for-players-screen.component';

describe('WaitingForPlayersScreenComponent', () => {
  let component: WaitingForPlayersScreenComponent;
  let fixture: ComponentFixture<WaitingForPlayersScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingForPlayersScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingForPlayersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
