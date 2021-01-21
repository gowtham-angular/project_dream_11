import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDreamTeamsComponent } from './view-dream-teams.component';

describe('ViewDreamTeamsComponent', () => {
  let component: ViewDreamTeamsComponent;
  let fixture: ComponentFixture<ViewDreamTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDreamTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDreamTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
