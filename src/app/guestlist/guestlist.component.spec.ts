import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestlistComponent } from './guestlist.component';

describe('GuestlistComponent', () => {
  let component: GuestlistComponent;
  let fixture: ComponentFixture<GuestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
