import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSquadsComponent } from './create-squads.component';

describe('CreateSquadsComponent', () => {
  let component: CreateSquadsComponent;
  let fixture: ComponentFixture<CreateSquadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSquadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSquadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
