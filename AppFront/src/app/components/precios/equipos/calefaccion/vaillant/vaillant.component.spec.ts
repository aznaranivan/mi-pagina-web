import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaillantComponent } from './vaillant.component';

describe('VaillantComponent', () => {
  let component: VaillantComponent;
  let fixture: ComponentFixture<VaillantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaillantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaillantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
