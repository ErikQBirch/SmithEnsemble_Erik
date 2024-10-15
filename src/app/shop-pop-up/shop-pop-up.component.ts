import { Component, OnInit, Input } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { MailService } from '../services/mail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop-pop-up',
  templateUrl: './shop-pop-up.component.html',
  styleUrls: ['./shop-pop-up.component.css']
})
export class ShopPopUpComponent implements OnInit {

  @Input() childBucket1 = "";
  @Input() childBucket2 = ""

  TotalCost = '$100'
  totalCost: string = "You just spent $1.00! Yay!"
  
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
          alert(this.totalCost)
        }
      }
    )
  } //





  
  ngOnInit(): void {
  }

}
