import { MyPurchase, MyPurchaseType } from './../plug/purchase_model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form-purchase',
  templateUrl: './add-form-purchase.component.html',
  styleUrls: ['./add-form-purchase.component.css']
})
export class AddFormPurchaseComponent implements OnInit {

  name: any
  amount: number
  status: any = 1
  myPurchaseType = MyPurchaseType

  @Output() addSale = new EventEmitter<MyPurchase>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddSale() {
    let sale: MyPurchase = {
      name: this.name,
      amount: this.amount,
      status: this.status,
    }
    this.addSale.emit(sale)
  }
}
