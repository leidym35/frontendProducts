import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectinventoryComponent } from './selectinventory.component';

describe('SelectinventoryComponent', () => {
  let component: SelectinventoryComponent;
  let fixture: ComponentFixture<SelectinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
