import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftysecurityComponent } from './saftysecurity.component';

describe('SaftysecurityComponent', () => {
  let component: SaftysecurityComponent;
  let fixture: ComponentFixture<SaftysecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaftysecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaftysecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
