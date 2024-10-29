import { Component, ElementRef, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OrderInfo } from './orderInfo';
import { AlbumInfo } from '../buy-cds/album-info';

@Component({
  selector: 'app-buy-cds-info',
  templateUrl: './buy-cds-info.component.html',
  styleUrls: ['./buy-cds-info.component.css']
})
export class BuyCdsInfoComponent implements OnInit{
  @Input() itemPopUp:boolean;
  @Input() chosenItem:string = "";
  
  @Output() itemPopUpChange = new EventEmitter<boolean>();
  @Output() addedOrder = new EventEmitter<OrderInfo>();
  
  @ViewChild('productQuantity') productQuantity!: ElementRef;
  
  constructor() { }

  AlbumInfo = new AlbumInfo();
  myOrder = new OrderInfo();
  orderID = 0;
  productName: string = ""
  productPrice: number = 0;


  addToCart(){
    switch (this.chosenItem){
      case "AllThings":
        this.productName = this.AlbumInfo.Titles[0];
        this.productPrice = this.AlbumInfo.Prices.AllThings;
        break;
      case "BrightlyBeams":
        this.productName = this.AlbumInfo.Titles[1];
        this.productPrice = this.AlbumInfo.Prices.BrightlyBeams;
        break;
    }

    this.myOrder = new OrderInfo(
      this.orderID = this.orderID+1,
      this.productName,
      Number(this.productQuantity.nativeElement.value),
      Number(this.productPrice)
    )

    this.addedOrder.emit(this.myOrder);
    this.productQuantity.nativeElement.value = 0;
    this.closePopUp();

  }

  closePopUp(){
    this.itemPopUp = false;
    this.itemPopUpChange.emit(this.itemPopUp);
  }

  ngOnInit(): void {  
  }
  
}
