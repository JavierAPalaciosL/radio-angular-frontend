import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCountryStatesComponent } from './card-country-states-component';

describe('CardCountryStatesComponent', () => {
  let component: CardCountryStatesComponent;
  let fixture: ComponentFixture<CardCountryStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCountryStatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCountryStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
