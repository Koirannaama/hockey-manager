import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesViewComponent } from './fixtures-view.component';

describe('FixturesViewComponent', () => {
  let component: FixturesViewComponent;
  let fixture: ComponentFixture<FixturesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
