import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictTeamsComponent } from './predict-teams.component';

describe('PredictTeamsComponent', () => {
  let component: PredictTeamsComponent;
  let fixture: ComponentFixture<PredictTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
