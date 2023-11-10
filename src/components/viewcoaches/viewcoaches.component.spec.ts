import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcoachesComponent } from './viewcoaches.component';

describe('ViewcoachesComponent', () => {
  let component: ViewcoachesComponent;
  let fixture: ComponentFixture<ViewcoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcoachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
