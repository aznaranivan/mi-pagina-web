import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AristonComponent } from './ariston.component';

describe('AristonComponent', () => {
  let component: AristonComponent;
  let fixture: ComponentFixture<AristonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AristonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AristonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
