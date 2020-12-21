import { MyPurchase } from './../plug/purchase_model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-table-purchases',
  templateUrl: './table-purchases.component.html',
  styleUrls: ['./table-purchases.component.css']
})
export class TablePurchasesComponent implements OnInit {

  @Input() title: string
  @Input() sale: MyPurchase[] = []
  @Output() deletePurchase = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  // onDeletePurchase(id: any) {
  //   this.deletePurchase.emit(id)
  // }
}
