import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineReportsComponent } from './inline-reports.component';

describe('InlineReportsComponent', () => {
  let component: InlineReportsComponent;
  let fixture: ComponentFixture<InlineReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
