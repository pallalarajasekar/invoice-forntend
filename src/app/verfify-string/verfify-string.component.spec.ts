import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfifyStringComponent } from './verfify-string.component';

describe('VerfifyStringComponent', () => {
  let component: VerfifyStringComponent;
  let fixture: ComponentFixture<VerfifyStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfifyStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfifyStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
