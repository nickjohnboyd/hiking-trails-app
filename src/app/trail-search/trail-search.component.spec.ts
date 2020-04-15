import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailSearchComponent } from './trail-search.component';

describe('TrailSearchComponent', () => {
  let component: TrailSearchComponent;
  let fixture: ComponentFixture<TrailSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
