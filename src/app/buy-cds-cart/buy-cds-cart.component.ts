import { Component, OnInit, ElementRef, Input, Output, OnChanges, EventEmitter, AfterViewInit, ViewChild, SimpleChanges, Renderer2} from '@angular/core';
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

  @ViewChild('popUp_cart') popUp_cart!: ElementRef;
  @ViewChild('myPaypalButtons') myPaypalButtons!: ElementRef;
  @ViewChild('contactForm') contactForm!: NgForm;
  @Input() soonToPurchase = [];
  @Output() changedCart = new EventEmitter<OrderInfo[]>();


  // checkOutNow = false;

  AllThingsCount: number = 1;
  BrightlyBeamsCount: number = 1;
  PurchaseCost: number = 2.99;
  fullOrder: string ='';
  newCart = [];
  taxPercentage: number = 0.07;
  shippingCost: number = 5;
  checkOutCount: number = 0;

 

  
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
    console.log(this.myPaypalButtons);


    render(
      {
        id:"#myPaypalButtons",
        currency:"USD",
        value:this.customerOrder.grandTotal.toString(),
        onApprove:(details) => {
          
          this.submitEmail(this.contactForm)
        }
      }
    )
    // if (this.checkOutCount == 0){
    //   // render(
    //   //   {
    //   //     id:"#myPaypalButtons",
    //   //     currency:"USD",
    //   //     value:this.customerOrder.grandTotal.toString(),
    //   //     onApprove:(details) => {
            
    //   //       this.submitEmail(this.contactForm)
    //   //     }
    //   //   }
    //   // )
    //   this.checkOutCount++;
    // }


    this.checkOutPopUp = true;

    this.fullOrder = "";//reset

    this.soonToPurchase.forEach(item => {
      this.fullOrder = 
        this.fullOrder + 
        `* ${item.orderName} (Qty: ${item.orderQuantity})\n`
    });

    this.fullOrder = this.fullOrder + `\nSum Total: $${this.customerOrder.sumTotal}\n`
    this.fullOrder = this.fullOrder + `Sales Tax: $${this.customerOrder.salesTax}\n`;
    this.fullOrder = this.fullOrder + `Shipping: $${this.customerOrder.shipping}\n`;

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
    this.closeCart();
  }

  constructor(private mailService: MailService, private renderer: Renderer2) { 
  } 


  ngAfterViewInit(): void{

    setTimeout(function(){
      // 
      if (!this.myPaypalButtons.innerHTML){
        // location.reload();
      }
    },100)
;
  }

  ngOnChanges(changes: SimpleChanges): void {

    

  }



  
  ngOnInit(): void {
  }


  removeItem(trashOrder){
    
    this.newCart = this.soonToPurchase.filter((item)=>{return (item !=trashOrder)})
    

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
    
    let childElements = this.myPaypalButtons.nativeElement.children;
    for (let child of childElements){
      this.renderer.removeChild(this.myPaypalButtons.nativeElement, child)
    }
  }
}
