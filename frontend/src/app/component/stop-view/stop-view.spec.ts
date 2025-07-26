import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopView } from './stop-view';

describe('StopView', () => {
  let component: StopView;
  let fixture: ComponentFixture<StopView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
