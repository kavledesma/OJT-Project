import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountabilityHomeComponent } from './accountability-home.component';

describe('AccountabilityHomeComponent', () => {
  let component: AccountabilityHomeComponent;
  let fixture: ComponentFixture<AccountabilityHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountabilityHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountabilityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
