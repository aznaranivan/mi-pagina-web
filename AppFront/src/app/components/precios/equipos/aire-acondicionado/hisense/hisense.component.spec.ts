import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisenseComponent } from './hisense.component';

describe('HisenseComponent', () => {
  let component: HisenseComponent;
  let fixture: ComponentFixture<HisenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HisenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HisenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
