import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderAnalysisComponent } from './shareholder-analysis.component';

describe('ShareholderAnalysisComponent', () => {
  let component: ShareholderAnalysisComponent;
  let fixture: ComponentFixture<ShareholderAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholderAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
