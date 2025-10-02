import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaxiComponent } from './baxi.component';

describe('BaxiComponent', () => {
  let component: BaxiComponent;
  let fixture: ComponentFixture<BaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaxiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
