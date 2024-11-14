import { Component, ElementRef, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OrderInfo } from '../orderInfo';
import { AlbumInfo } from '../albumInfo';

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

  zoomIn_pic: string = ""
  zoomIn_bool: boolean = false;


  addToCart(){
    this.productName = this.AlbumInfo.Titles[this.chosenItem];
    this.productPrice = this.AlbumInfo.Prices[this.chosenItem];

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

  closeZoomIn(){
    this.zoomIn_bool = false;
  }

  zoomIn(pic: String){
    this.zoomIn_pic = "../../assets/images/SmithEnsemblePics/"+pic;
    this.zoomIn_bool = true;
  }

  
  ngOnInit(): void {  
  }
  
}
