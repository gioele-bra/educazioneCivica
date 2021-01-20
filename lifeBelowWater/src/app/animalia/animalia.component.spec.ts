import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaliaComponent } from './animalia.component';

describe('AnimaliaComponent', () => {
  let component: AnimaliaComponent;
  let fixture: ComponentFixture<AnimaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
