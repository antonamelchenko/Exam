import { MyPurchase, MyPurchaseDataBase, MyPurchaseType } from './plug/purchase_model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список покупок'
  sale: MyPurchase[] = MyPurchaseDataBase
  myPurchaseType = MyPurchaseType

  getByName(status: number) {
    return this.sale.filter(obj => obj.status === status)
  }

  onAddSale(purchase: MyPurchase) {
    let id = this.sale.length > 0 ? this.sale[this.sale.length - 1].id + 1 : 0
    purchase.id = id
    this.sale.push(purchase)
  }

  onDeletePurchase(id: any) {
    console.log(id)
  }
  // getByName() {
  //   return this.sale.sort((a, b) => a.amount - b.amount)
  // }
}
