import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropImageScreenComponent } from './crop-image-screen.component';

describe('CropImageScreenComponent', () => {
  let component: CropImageScreenComponent;
  let fixture: ComponentFixture<CropImageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropImageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropImageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
