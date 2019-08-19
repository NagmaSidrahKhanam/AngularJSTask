import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTracksComponent } from './list-of-tracks.component';

describe('ListOfTracksComponent', () => {
  let component: ListOfTracksComponent;
  let fixture: ComponentFixture<ListOfTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
