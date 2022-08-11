import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdnewsComponent } from './prodnews.component';

describe('ProdnewsComponent', () => {
  let component: ProdnewsComponent;
  let fixture: ComponentFixture<ProdnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
