import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerroliComponent } from './ferroli.component';

describe('FerroliComponent', () => {
  let component: FerroliComponent;
  let fixture: ComponentFixture<FerroliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FerroliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerroliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
