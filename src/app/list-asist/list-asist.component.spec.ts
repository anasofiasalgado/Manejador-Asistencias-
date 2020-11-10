import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsistComponent } from './list-asist.component';

describe('ListAsistComponent', () => {
  let component: ListAsistComponent;
  let fixture: ComponentFixture<ListAsistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
