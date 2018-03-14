import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGuessScreenComponent } from './submit-guess-screen.component';

describe('SubmitGuessScreenComponent', () => {
  let component: SubmitGuessScreenComponent;
  let fixture: ComponentFixture<SubmitGuessScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitGuessScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitGuessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
