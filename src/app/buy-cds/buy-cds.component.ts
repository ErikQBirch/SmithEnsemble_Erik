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

  parentPackage1 = "Where's my money?"
  parentPackage2 ="Pay up sonny!"

  showItemPopUp = false;
  selectedItem = "";

  showCartPopUp = false;

  @Input() fullOrder = []

  selectItem(itemName:string){
    this.showItemPopUp = true;
    this.selectedItem = itemName;
  }

  showCart(){
    this.showCartPopUp = true;
  }

  parentUpdate(addedOrder: OrderInfo){
    this.fullOrder.push(addedOrder);
    console.log(addedOrder, this.fullOrder);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "CHANGES_IN_PARENT");

  }

}
