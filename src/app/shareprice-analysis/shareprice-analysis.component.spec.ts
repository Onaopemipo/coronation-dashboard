import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepriceAnalysisComponent } from './shareprice-analysis.component';

describe('SharepriceAnalysisComponent', () => {
  let component: SharepriceAnalysisComponent;
  let fixture: ComponentFixture<SharepriceAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharepriceAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepriceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
