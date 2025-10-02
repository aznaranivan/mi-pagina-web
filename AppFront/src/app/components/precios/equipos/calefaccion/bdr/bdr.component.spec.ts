import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdrComponent } from './bdr.component';

describe('BdrComponent', () => {
  let component: BdrComponent;
  let fixture: ComponentFixture<BdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
