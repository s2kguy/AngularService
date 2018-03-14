import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingForHostScreenComponent } from './waiting-for-host-screen.component';

describe('WaitingForHostScreenComponent', () => {
  let component: WaitingForHostScreenComponent;
  let fixture: ComponentFixture<WaitingForHostScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingForHostScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingForHostScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
