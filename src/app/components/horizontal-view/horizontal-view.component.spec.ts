import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalViewComponent } from './horizontal-view.component';

describe('HorizontalViewComponent', () => {
  let component: HorizontalViewComponent;
  let fixture: ComponentFixture<HorizontalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
