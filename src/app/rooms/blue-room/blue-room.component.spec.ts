import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueRoomComponent } from './blue-room.component';

describe('BlueRoomComponent', () => {
  let component: BlueRoomComponent;
  let fixture: ComponentFixture<BlueRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueRoomComponent]
    });
    fixture = TestBed.createComponent(BlueRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
