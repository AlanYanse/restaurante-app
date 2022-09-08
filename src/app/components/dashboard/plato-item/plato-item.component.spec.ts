import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoItemComponent } from './plato-item.component';

describe('PlatoItemComponent', () => {
  let component: PlatoItemComponent;
  let fixture: ComponentFixture<PlatoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
