import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNotfoundComponent } from './character-notfound.component';

describe('CharacterNotfoundComponent', () => {
  let component: CharacterNotfoundComponent;
  let fixture: ComponentFixture<CharacterNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
