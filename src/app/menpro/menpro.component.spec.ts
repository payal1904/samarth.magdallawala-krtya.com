import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenproComponent } from './menpro.component';

describe('MenproComponent', () => {
  let component: MenproComponent;
  let fixture: ComponentFixture<MenproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
