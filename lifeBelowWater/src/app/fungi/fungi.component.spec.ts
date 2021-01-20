import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FungiComponent } from './fungi.component';

describe('FungiComponent', () => {
  let component: FungiComponent;
  let fixture: ComponentFixture<FungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FungiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
