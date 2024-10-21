export class OrderInfo{
  constructor (
    public orderID: number = 0,
    public orderName: string = "",
    public orderQuantity: number = 0,
    public orderPrice: number = 0
  ) {}
}