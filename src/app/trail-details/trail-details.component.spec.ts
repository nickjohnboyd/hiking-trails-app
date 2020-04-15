import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailDetailsComponent } from './trail-details.component';

describe('TrailDetailsComponent', () => {
  let component: TrailDetailsComponent;
  let fixture: ComponentFixture<TrailDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
