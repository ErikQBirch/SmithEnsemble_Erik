import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MailService } from '../services/mail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mybody',
  templateUrl: './ensemble.component.html',
  styleUrls: ['./ensemble.component.css']
})
export class EnsembleComponent implements OnInit {
  @ViewChild('videoHolder') videoHolder!: ElementRef;
  @ViewChild('samplePopUp') samplePopUp!: ElementRef;
  
  constructor(private mailService: MailService) { }

  fadeOut_bool: boolean = false;
  showVideo_bool: boolean = false;


  hideVideo(){
    // let hero = this.videoHolder.nativeElement.children;
    // hero[1].play();
    this.showVideo_bool = false;
  }

  showVideo(){
    // let hero = this.videoHolder.nativeElement.children;
    // hero[1].pause();
    this.showVideo_bool = true;
  }


  ngOnInit() {
  }




//EMAIL_STUFF
  private color: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  onSubmit: boolean = false;
  contactFormValues = {
    name: 'Valued Patron',
    email: '',
    body: 'I would like to receive updates pertaining to your content',
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
  }

}
