import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FujitsuComponent } from './fujitsu.component';

describe('FujitsuComponent', () => {
  let component: FujitsuComponent;
  let fixture: ComponentFixture<FujitsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FujitsuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FujitsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
