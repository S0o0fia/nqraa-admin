import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsReportsComponent } from './js-reports.component';

describe('JsReportsComponent', () => {
  let component: JsReportsComponent;
  let fixture: ComponentFixture<JsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
