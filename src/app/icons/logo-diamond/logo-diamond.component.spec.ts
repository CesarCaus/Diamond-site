import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDiamondComponent } from './logo-diamond.component';

describe('LogoDiamondComponent', () => {
  let component: LogoDiamondComponent;
  let fixture: ComponentFixture<LogoDiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoDiamondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
