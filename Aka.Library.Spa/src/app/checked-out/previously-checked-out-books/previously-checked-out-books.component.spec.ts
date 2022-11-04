import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouslyCheckedOutBooksComponent } from './previously-checked-out-books.component';

describe('PreviouslyCheckedOutBooksComponent', () => {
  let component: PreviouslyCheckedOutBooksComponent;
  let fixture: ComponentFixture<PreviouslyCheckedOutBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviouslyCheckedOutBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouslyCheckedOutBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
