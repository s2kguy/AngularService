import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectImageScreenComponent } from './select-image-screen.component';

describe('SelectImageScreenComponent', () => {
  let component: SelectImageScreenComponent;
  let fixture: ComponentFixture<SelectImageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectImageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectImageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
