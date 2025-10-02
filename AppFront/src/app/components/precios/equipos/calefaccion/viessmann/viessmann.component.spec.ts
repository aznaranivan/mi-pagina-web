import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViessmannComponent } from './viessmann.component';

describe('ViessmannComponent', () => {
  let component: ViessmannComponent;
  let fixture: ComponentFixture<ViessmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViessmannComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViessmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
