import { Component, ElementRef, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { OrderInfo } from './orderInfo';
import { AlbumSongs } from '../buy-cds/album-songs';

@Component({
  selector: 'app-buy-cds-info',
  templateUrl: './buy-cds-info.component.html',
  styleUrls: ['./buy-cds-info.component.css']
})
export class BuyCdsInfoComponent implements OnInit, OnChanges{
  @Input() itemPopUp:boolean;
  @Output() itemPopUpChange = new EventEmitter<boolean>();
  @Input() chosenItem:string = "";
  productName: string = ""
  productPrice: number = 0;
  @ViewChild('productQuantity') productQuantity!: ElementRef;
  @Output() addedOrder = new EventEmitter<OrderInfo>();



  AlbumSongs = new AlbumSongs();
  myOrder = new OrderInfo();
  orderID = 0;

  constructor() { }


  addToCart(){
    switch (this.chosenItem){
      case "AllThings":
        this.productName = 'The Smith Ensemble: All Things Come of Thee';
        this.productPrice = 2.98;
        break;
      case "BrightlyBeams":
        this.productName = 'The Smith Six: Brightly Beams';
        this.productPrice = 3.99;
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

  }

  closePopUp(){
    this.itemPopUp = false;
    this.itemPopUpChange.emit(this.itemPopUp);
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES_IN_INFO', changes);
  }


  ngOnInit(): void {  
  }
  
}
