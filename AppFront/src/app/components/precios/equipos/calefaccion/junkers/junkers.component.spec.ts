import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkersComponent } from './junkers.component';

describe('JunkersComponent', () => {
  let component: JunkersComponent;
  let fixture: ComponentFixture<JunkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JunkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
