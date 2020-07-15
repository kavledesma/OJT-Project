import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderAddItemComponent } from './purchase-order-add-item.component';

describe('PurchaseOrderAddItemComponent', () => {
  let component: PurchaseOrderAddItemComponent;
  let fixture: ComponentFixture<PurchaseOrderAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
