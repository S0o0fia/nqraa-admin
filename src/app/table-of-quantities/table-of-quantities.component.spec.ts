import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfQuantitiesComponent } from './table-of-quantities.component';

describe('TableOfQuantitiesComponent', () => {
  let component: TableOfQuantitiesComponent;
  let fixture: ComponentFixture<TableOfQuantitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfQuantitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
