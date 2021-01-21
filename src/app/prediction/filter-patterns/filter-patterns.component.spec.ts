import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPatternsComponent } from './filter-patterns.component';

describe('FilterPatternsComponent', () => {
  let component: FilterPatternsComponent;
  let fixture: ComponentFixture<FilterPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPatternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
