import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyInvestments } from './find-my-investments';

describe('FindMyInvestments', () => {
  let component: FindMyInvestments;
  let fixture: ComponentFixture<FindMyInvestments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindMyInvestments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMyInvestments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
