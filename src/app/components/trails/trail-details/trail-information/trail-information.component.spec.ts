import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailInformationComponent } from './trail-information.component';

describe('TrailInformationComponent', () => {
  let component: TrailInformationComponent;
  let fixture: ComponentFixture<TrailInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
