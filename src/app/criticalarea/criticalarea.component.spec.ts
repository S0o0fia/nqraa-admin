import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalareaComponent } from './criticalarea.component';

describe('CriticalareaComponent', () => {
  let component: CriticalareaComponent;
  let fixture: ComponentFixture<CriticalareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
