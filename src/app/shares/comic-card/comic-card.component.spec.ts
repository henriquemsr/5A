import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCardComponent } from './comic-card.component';

describe('ComicCardComponent', () => {
  let component: ComicCardComponent;
  let fixture: ComponentFixture<ComicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
