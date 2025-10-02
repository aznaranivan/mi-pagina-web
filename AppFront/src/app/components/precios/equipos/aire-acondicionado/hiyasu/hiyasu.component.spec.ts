import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiyasuComponent } from './hiyasu.component';

describe('HiyasuComponent', () => {
  let component: HiyasuComponent;
  let fixture: ComponentFixture<HiyasuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiyasuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiyasuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
