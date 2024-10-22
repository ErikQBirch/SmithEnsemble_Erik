import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { MailService } from '../services/mail.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';

import { OrderInfo } from '../buy-cds-info/orderInfo';


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
  @Input() sumTotalCost: number = 0;
  // @Input() grandTotalCost: number = 0;

  showItemPopUp = false;
  selectedItem = "";
  duplicate = false;
  changedTotal = 0;

  showCartPopUp = false;

  @Input() myOrders = [];

  selectItem(itemName:string){
    this.showItemPopUp = true;
    this.selectedItem = itemName;
  }

  showCart(){
    this.showCartPopUp = true;
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
    console.log(addedOrder, this.myOrders);

    // this.findSumTotal(this.myOrders);

    // this.totalUpCosts(this.myOrders);
  }

  findSumTotal(orders: OrderInfo[]){
    orders.forEach(item => {
      this.changedTotal = this.changedTotal + item.orderPrice;
    });
    this.changedTotal = Math.round((this.changedTotal*0.07)*100)/100;
    
    console.log(this.sumTotalCost, this.changedTotal);
    if (this.sumTotalCost != this.changedTotal){
      this.sumTotalCost = this.changedTotal;
    }
  }

  // totalUpCosts(orders: OrderInfo[]){
  //   orders.forEach(item => {
  //     this.sumTotalCost = this.sumTotalCost + item.orderPrice;
  //   });
  //   console.log(this.changedTotalCost, this.sumTotalCost)
  //   if (this.sumTotalCost != this.changedTotalCost){
  //     this.salesTax = Math.round((this.sumTotalCost * 0.07)*100)/100;
  //     this.grandTotalCost = this.sumTotalCost + this.salesTax + this.shippingCost;
  //     this.changedTotalCost = this.sumTotalCost;
  //   }
  // }


  changeOrder(changedCart: OrderInfo[]){
    console.log(changedCart);
    this.myOrders = changedCart;
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "CHANGES_IN_PARENT");

  }

}
