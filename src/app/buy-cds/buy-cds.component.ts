import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { MailService } from '../services/mail.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';

import { OrderInfo } from '../buy-cds-info/orderInfo';
import { allCosts } from '../buy-cds-cart/allCosts';

@Component({
  selector: 'app-buy-cds',
  templateUrl: './buy-cds.component.html',
  styleUrls: ['./buy-cds.component.css'],
})
export class BuyCdsComponent implements OnInit, OnChanges {
  
  // @Input() myMessage = "Where's my moneys?"

  @Input() salesTax: number = 0;
  shippingCost: number = 5;
  @Input() totalCost: number = 0;
  @Input() grandTotalCost: number = 0;

  // @Input() sumTotalCost: number = 0;


  sumTotal = 0;
  changedTotal = 0;


  showItemPopUp = false;
  selectedItem = "";
  duplicate = false;

  showCartPopUp = false;

  @Input() myOrders = [];

  customerOrder = new allCosts();

  selectItem(itemName:string){
    this.showItemPopUp = true;
    this.selectedItem = itemName;
  }

  // showCart(){
  //   this.showCartPopUp = true;
  // }
  // closeCart(result: boolean){
  //   this.showCartPopUp = result;
  // }

  toggleCartPopUp(result: boolean){
    this.showCartPopUp = result;
  }

  applyOrder(addedOrder: OrderInfo){
    if (addedOrder.orderQuantity != 0){
      if (this.myOrders.length != 0){
        this.myOrders.forEach(order => {
          if (order.orderName == addedOrder.orderName){
            this.duplicate = true;
            order.orderQuantity = order.orderQuantity+addedOrder.orderQuantity;
          } 
        });
        if (this.duplicate == false){this.myOrders.push(addedOrder)}
        this.duplicate = false;
      }
      else{this.myOrders.push(addedOrder);}
    }
    console.log(this.myOrders);

    this.additionalCosts(this.myOrders)
  }

  additionalCosts(orders: OrderInfo[]){
    this.changedTotal = 0;
    orders.forEach(item => {
      this.changedTotal = this.changedTotal + (item.orderPrice * item.orderQuantity);
    });
    console.log(this.sumTotal, this.changedTotal)
    if(this.sumTotal != this.changedTotal){
      this.sumTotal = Math.round(this.changedTotal*100)/100;
      this.salesTax = Math.round((this.sumTotal*0.07)*100)/100
      this.grandTotalCost = Math.round((this.sumTotal + this.salesTax + this.shippingCost)*100)/100;
    }
    console.log(this.sumTotal, this.changedTotal, this.salesTax, this.grandTotalCost);
    
    this.customerOrder = new allCosts(
      this.sumTotal,
      this.salesTax,
      this.shippingCost,
      this.grandTotalCost
    )

    console.log(this.customerOrder)
  }
 

  changeOrder(changedCart: OrderInfo[]){
    console.log(changedCart);
    this.myOrders = changedCart;
    this.additionalCosts(this.myOrders);
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "CHANGES_IN_PARENT");

  }

}

