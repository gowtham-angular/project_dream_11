import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScoreCardComponent } from './view-score-card.component';

describe('ViewScoreCardComponent', () => {
  let component: ViewScoreCardComponent;
  let fixture: ComponentFixture<ViewScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScoreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
