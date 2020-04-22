import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExtrasComponent } from './home-extras.component';

describe('HomeExtrasComponent', () => {
  let component: HomeExtrasComponent;
  let fixture: ComponentFixture<HomeExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
