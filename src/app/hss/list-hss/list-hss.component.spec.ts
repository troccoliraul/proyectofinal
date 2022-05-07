import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHssComponent } from './list-hss.component';

describe('ListHssComponent', () => {
  let component: ListHssComponent;
  let fixture: ComponentFixture<ListHssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
