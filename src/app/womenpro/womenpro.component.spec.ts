import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenproComponent } from './womenpro.component';

describe('WomenproComponent', () => {
  let component: WomenproComponent;
  let fixture: ComponentFixture<WomenproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
