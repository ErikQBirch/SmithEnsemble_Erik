import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-buy-cds',
  templateUrl: './buy-cds.component.html',
  styleUrls: ['./buy-cds.component.css']
})
export class BuyCdsComponent implements OnInit {

  constructor() { 
    render(
      {
        id:"#myPaypalButtons",
        currency:"USD",
        value:"1.00",
        onApprove:(details) => {
          alert("This would also send an email to the seller about the transaction and the info involved! \nhttps://www.youtube.com/watch?v=-HeadgoqJ7A")
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
