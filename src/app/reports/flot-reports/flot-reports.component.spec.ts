import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotReportsComponent } from './flot-reports.component';

describe('FlotReportsComponent', () => {
  let component: FlotReportsComponent;
  let fixture: ComponentFixture<FlotReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
