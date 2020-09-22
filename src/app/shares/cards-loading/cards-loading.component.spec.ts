import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLoadingComponent } from './cards-loading.component';

describe('CardsLoadingComponent', () => {
  let component: CardsLoadingComponent;
  let fixture: ComponentFixture<CardsLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
