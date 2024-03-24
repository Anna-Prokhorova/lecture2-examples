import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenRoomComponent } from './green-room.component';

describe('GreenRoomComponent', () => {
  let component: GreenRoomComponent;
  let fixture: ComponentFixture<GreenRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenRoomComponent]
    });
    fixture = TestBed.createComponent(GreenRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
