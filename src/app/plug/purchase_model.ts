
export interface MyPurchase {
  name: any,
  amount: number,
  id?: any,
  status?: any
}

export enum MyPurchaseType {
  bought,
  not_bought,
}

export let MyPurchaseDataBase: MyPurchase[] = [
  {id: 1, name: 'Яйца', amount: 10, status: 1},
  {id: 2, name: 'Хлеб', amount: 1, status: 0},
  {id: 3, name: 'Молоко', amount: 7, status: 1},
  {id: 4, name: 'Колбаса', amount: 3, status: 0},
]
