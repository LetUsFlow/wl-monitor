import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSelector } from './line-selector';

describe('LineSelector', () => {
  let component: LineSelector;
  let fixture: ComponentFixture<LineSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
