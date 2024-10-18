import { Component, OnInit, Input } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { MailService } from '../services/mail.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';


@Component({
  selector: 'app-buy-cds',
  templateUrl: './buy-cds.component.html',
  styleUrls: ['./buy-cds.component.css'],
})
export class BuyCdsComponent implements OnInit {
  
  // @Input() myMessage = "Where's my moneys?"

  parentPackage1 = "Where's my money?"
  parentPackage2 ="Pay up sonny!"

  showItemPopUp = false;
  selectedItem = "";

  showCartPopUp = false;



  selectItem(itemName:string){
    this.showItemPopUp = true;
    this.selectedItem = itemName;
  }

  showCart(){
    this.showCartPopUp = true;
  }

  ngOnInit(): void {
  }

}
