import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
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
export class BuyCdsCartComponent implements OnInit {
  @Input() cartPopUp:boolean;
  @Input() checkOutPopUp: boolean = false;
  @Input() customerOrder: allCosts;
  @Input() soonToPurchase = [];
  
  @Output() cartPopUpChange = new EventEmitter<boolean>();
  @Output() checkOutPopUpChange = new EventEmitter<boolean>();
  @Output() changedCart = new EventEmitter<OrderInfo[]>();

  @ViewChild('popUp_cart') popUp_cart!: ElementRef;
  @ViewChild('myPaypalButtons') myPaypalButtons!: ElementRef;
  @ViewChild('contactForm') contactForm!: NgForm;

  constructor(private mailService: MailService, private renderer: Renderer2) { 
  } 

  AllThingsCount: number = 1;
  BrightlyBeamsCount: number = 1;
  checkOutCount: number = 0;
  fullOrder: string ='';
  newCart = [];
  PurchaseCost: number = 0.00;
  shippingCost: number = 0.5;


  
  //EMAIL_STUFF_START
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
    this.fullOrder = this.fullOrder + `Total = $${this.customerOrder.grandTotal}\n\n`
    this.fullOrder = this.fullOrder + "Refer to your PayPal and compare prices/purchase times in order to determine the identity and mailing address of the customer \n\nhttps://www.sandbox.paypal.com/us/home\nOR\nwww.paypal.com/us/webapps/mpp/account-selection"

    this.contactFormValues = {
      name: 'Patricia Smith',
      email: 'thesmithensemble@gmail.com',
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
    formData.append('access_key', "f001b29e-df74-456f-86bb-9f4c9f3c5c04");
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

    // this.customerOrder = new allCosts()
    
    this.soonToPurchase.forEach(item => {
      this.removeItem(item);
    });
    
    this.closeCart();
    this.closeCheckOut();
    
    alert("Your purchase has gone though!");
  }
//EMAIL_STUFF_END

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

  removeItem(trashOrder){
    this.newCart = this.soonToPurchase.filter((item)=>{return (item !=trashOrder)})
    this.soonToPurchase = this.newCart
    this.changedCart.emit(this.soonToPurchase);

    if (this.soonToPurchase.length == 0){
      this.closeCart();
    }
  }
  
  ngOnInit(): void {
  }
}
