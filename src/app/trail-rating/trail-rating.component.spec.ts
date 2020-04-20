import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailRatingComponent } from './trail-rating.component';

describe('TrailRatingComponent', () => {
  let component: TrailRatingComponent;
  let fixture: ComponentFixture<TrailRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
