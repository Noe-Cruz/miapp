import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaspComponent } from './tareasp.component';

describe('TareaspComponent', () => {
  let component: TareaspComponent;
  let fixture: ComponentFixture<TareaspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
