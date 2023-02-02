import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherproComponent } from './otherpro.component';

describe('OtherproComponent', () => {
  let component: OtherproComponent;
  let fixture: ComponentFixture<OtherproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
