import { Component, ElementRef, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { OrderInfo } from './orderInfo';

@Component({
  selector: 'app-buy-cds-info',
  templateUrl: './buy-cds-info.component.html',
  styleUrls: ['./buy-cds-info.component.css']
})
export class BuyCdsInfoComponent implements OnInit, OnChanges{

  @Input() itemPopUp:boolean;
  @Output() itemPopUpChange = new EventEmitter<boolean>();
  @Input() chosenItem:string = "";
  @ViewChild('productQuantity') productQuantity!: ElementRef;
  @Output() addedOrder = new EventEmitter<OrderInfo>();


  myOrder = new OrderInfo();

  constructor() { }


  addToCart(){
    // console.log(this.productQuantity.nativeElement.value)
    this.myOrder = new OrderInfo(
      this.chosenItem,
      this.productQuantity.nativeElement.value
    )
    this.addedOrder.emit(this.myOrder)

  }

  closePopUp(){
    this.itemPopUp = false;
    this.itemPopUpChange.emit(this.itemPopUp);
  }



  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.itemPopUp);
    // console.log('param changes', changes);
  }


  ngOnInit(): void {  
  }
  
}
