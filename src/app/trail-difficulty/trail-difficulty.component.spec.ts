import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailDifficultyComponent } from './trail-difficulty.component';

describe('TrailDifficultyComponent', () => {
  let component: TrailDifficultyComponent;
  let fixture: ComponentFixture<TrailDifficultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailDifficultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
