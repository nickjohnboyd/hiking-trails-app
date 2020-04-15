import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailItemComponent } from './trail-item.component';

describe('TrailItemComponent', () => {
  let component: TrailItemComponent;
  let fixture: ComponentFixture<TrailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
