import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCard } from './line-card';

describe('LineCard', () => {
  let component: LineCard;
  let fixture: ComponentFixture<LineCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
