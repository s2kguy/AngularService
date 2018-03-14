import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealScreenComponent } from './reveal-screen.component';

describe('RevealScreenComponent', () => {
  let component: RevealScreenComponent;
  let fixture: ComponentFixture<RevealScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevealScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
