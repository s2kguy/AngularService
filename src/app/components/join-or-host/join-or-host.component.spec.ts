import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOrHostComponent } from './join-or-host.component';

describe('JoinOrHostComponent', () => {
  let component: JoinOrHostComponent;
  let fixture: ComponentFixture<JoinOrHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinOrHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinOrHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
