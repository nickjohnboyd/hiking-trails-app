import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailItemSmallComponent } from './trail-item-small.component';

describe('TrailItemSmallComponent', () => {
  let component: TrailItemSmallComponent;
  let fixture: ComponentFixture<TrailItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
