import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReferencesComponent } from './update-references.component';

describe('UpdateReferencesComponent', () => {
  let component: UpdateReferencesComponent;
  let fixture: ComponentFixture<UpdateReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
