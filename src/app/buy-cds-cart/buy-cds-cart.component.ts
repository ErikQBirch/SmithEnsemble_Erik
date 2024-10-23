import { Component, OnInit, ElementRef, Input, Output, OnChanges, EventEmitter, AfterViewInit, ViewChild, SimpleChanges } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { MailService } from '../services/mail.service';
import { NgForm } from '@angular/forms';

import { OrderInfo } from '../buy-cds-info/orderInfo';
import { allCosts } from './allCosts';

@Component({
  selector: 'app-buy-cds-cart',
  templateUrl: './buy-cds-cart.component.html',
  styleUrls: ['./buy-cds-cart.component.css']
})
export class BuyCdsCartComponent implements OnInit, AfterViewInit, OnChanges {


  @Input() cartPopUp:boolean;
  @Output() cartPopUpChange = new EventEmitter<boolean>();
  @Input() checkOutPopUp: boolean = false;
  @Output() checkOutPopUpChange = new EventEmitter<boolean>();

  // @Input() salesTax: number;
  @Input() customerOrder: allCosts;
  // @Input() sumcustomerOrder: number;

  @ViewChild('popUp_cart') popUp_cart!: ElementRef;
  @ViewChild('myPaypalButtons') myPaypalButtons!: ElementRef;
  @ViewChild('contactForm') contactForm!: NgForm;
  @Input() soonToPurchase = [];
  @Output() changedCart = new EventEmitter<OrderInfo[]>();


  // checkOutNow = false;


  // customerOrder: number = 0;
  AllThingsCount: number = 1;
  BrightlyBeamsCount: number = 1;
  PurchaseCost: number = 2.99;
  fullOrder: string ='';
  newCart = [];
  taxPercentage: number = 0.07;
  shippingCost: number = 5;

  
  private color: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  onSubmit: boolean = false;
  contactFormValues = {
    name: '',
    email: '',
    body: '',
  };

  get alertColor() {
    return `text-${this.color}-400`;
  }
  
  hideAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }


  goCheckOut(){
    this.checkOutPopUp = true;
    console.log(this.soonToPurchase);

    this.fullOrder = "";//reset


    this.soonToPurchase.forEach(item => {
      this.fullOrder = 
        this.fullOrder + 
        `* ${item.orderName} (Qty: ${item.orderQuantity})\n`
      // this.customerOrder = this.customerOrder + item.orderPrice;
    });

    this.fullOrder = this.fullOrder + `\nSum Total: $${this.customerOrder.sumTotal}\n`
    this.fullOrder = this.fullOrder + `Sales Tax: $${this.customerOrder.salesTax}\n`;
    this.fullOrder = this.fullOrder + `Shipping: $${this.customerOrder.shipping}\n`;

    // this.customerOrder = this.customerOrder + (this.customerOrder * this.taxPercentage);
    // this.customerOrder = this.customerOrder + (this.shippingCost);

    console.log(this.customerOrder.grandTotal)
    this.fullOrder = this.fullOrder + `Total = $${this.customerOrder.grandTotal}`


    this.contactFormValues = {
      name: 'Erik Q. Birch',
      email: 'erikqbirch@gmail.com',
      body: this.fullOrder
    };
  }
  
  async submitEmail(contactForm: NgForm) {
    this.onSubmit = true;
    // -- set formData values
    let formData: FormData = new FormData();
    formData.append('name', this.contactFormValues.name);
    formData.append('email', this.contactFormValues.email);
    formData.append('body', this.contactFormValues.body);
    // -- email customization
    formData.append('access_key', "9eb85861-2991-4d54-b6b3-95d5c56c6ba0");
    formData.append('subject', 'Email Support From Your Site');
    formData.append('from_name', 'Contact Notification');
  
    try {
      // -- send email
      const res = await this.mailService.sendEmail(formData);
      if (!res.ok) {
        throw new Error();
      }
      this.alertMessage = 'Email sent successfully!';
      this.color = 'green';
      contactForm.reset();
    } catch (err) {
      // handle error
      this.alertMessage = 'Something went wrong, try again later!';
      this.color = 'red';
    }
    // -- reset submit and hide alert
    this.onSubmit = false;
    this.showAlert = true;
    this.hideAlert();
  }

  constructor(private mailService: MailService) { 
    render(
      {
        id:"#myPaypalButtons",
        currency:"USD",
        value:"1.00",
        onApprove:(details) => {
          // alert(this.customerOrder);
          console.log(this.contactFormValues.name);
          this.submitEmail(this.contactForm)
        }
      }
    )
  } //


  ngAfterViewInit(): void{

    setTimeout(function(){
      // console.log(this.myPaypalButtons);
      if (!this.myPaypalButtons.innerHTML){
        location.reload();
      }
      else{
        // this.myPaypalButtons.style.display = "none";
        // this.myPaypalButtons.style.opacity= "0";
      }
    },100)
;
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('CHANGES_IN_CART', changes);

  }



  
  ngOnInit(): void {
  }


  removeItem(trashOrder){
    console.log(this.soonToPurchase);
    this.newCart = this.soonToPurchase.filter((item)=>{return (item !=trashOrder)})
    console.log(this.newCart);

    this.soonToPurchase = this.newCart;
    
    this.changedCart.emit(this.soonToPurchase);

    if (this.soonToPurchase.length == 0){
      this.closeCart();
    }
  }

  
  closeCart(){
    this.cartPopUp = false;
    this.cartPopUpChange.emit(this.cartPopUp);
  }
  closeCheckOut(){
    this.checkOutPopUp = false;
    this.checkOutPopUpChange.emit(this.checkOutPopUp);
  }
}
