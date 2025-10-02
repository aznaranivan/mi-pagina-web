import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaitsuComponent } from './daitsu.component';

describe('DaitsuComponent', () => {
  let component: DaitsuComponent;
  let fixture: ComponentFixture<DaitsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaitsuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaitsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
