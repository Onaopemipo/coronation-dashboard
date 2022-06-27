import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryAnalysisComponent } from './industry-analysis.component';

describe('IndustryAnalysisComponent', () => {
  let component: IndustryAnalysisComponent;
  let fixture: ComponentFixture<IndustryAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
