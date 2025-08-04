import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInWithGoogleComponent } from './sing-in-with-google-component';

describe('SingInWithGoogleComponent', () => {
  let component: SingInWithGoogleComponent;
  let fixture: ComponentFixture<SingInWithGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingInWithGoogleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingInWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
