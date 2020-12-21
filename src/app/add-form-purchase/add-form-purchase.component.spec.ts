import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormPurchaseComponent } from './add-form-purchase.component';

describe('AddFormPurchaseComponent', () => {
  let component: AddFormPurchaseComponent;
  let fixture: ComponentFixture<AddFormPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
