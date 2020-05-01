import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrailsComponent } from './user-trails.component';

describe('UserTrailsComponent', () => {
  let component: UserTrailsComponent;
  let fixture: ComponentFixture<UserTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
