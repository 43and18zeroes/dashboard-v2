import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analystics } from './analystics';

describe('Analystics', () => {
  let component: Analystics;
  let fixture: ComponentFixture<Analystics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analystics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analystics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
