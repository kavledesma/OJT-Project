import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountabilityAddEditComponent } from './accountability-add-edit.component';

describe('AccountabilityAddEditComponent', () => {
  let component: AccountabilityAddEditComponent;
  let fixture: ComponentFixture<AccountabilityAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountabilityAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountabilityAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
