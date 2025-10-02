import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaunierComponent } from './saunier.component';

describe('SaunierComponent', () => {
  let component: SaunierComponent;
  let fixture: ComponentFixture<SaunierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaunierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaunierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
