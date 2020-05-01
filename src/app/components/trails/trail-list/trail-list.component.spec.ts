import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailListComponent } from './trail-list.component';

describe('TrailListComponent', () => {
  let component: TrailListComponent;
  let fixture: ComponentFixture<TrailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
