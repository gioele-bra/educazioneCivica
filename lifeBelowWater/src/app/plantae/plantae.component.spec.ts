import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaeComponent } from './plantae.component';

describe('PlantaeComponent', () => {
  let component: PlantaeComponent;
  let fixture: ComponentFixture<PlantaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
