import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import { OrderInfo } from './orderInfo';
import { allCosts } from './allCosts';
import { AlbumInfo } from './albumInfo';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-buy-cds',
  templateUrl: './buy-cds.component.html',
  styleUrls: ['./buy-cds.component.css'],
})
export class BuyCdsComponent implements OnInit {
  @Input() salesTax: number = 0;
  @Input() totalCost: number = 0;
  @Input() grandTotalCost: number = 0;
  @Input() myOrders = [];

  AlbumInfo = new AlbumInfo();
  
  changedTotal = 0;
  customerOrder = new allCosts(0,0,0,0);
  duplicate = false;
  selectedItem = "";
  shippingCost: number = 5;
  showCartPopUp = false;
  showItemPopUp = false;
  sumTotal = 0;
  TAX = 0.0745;

  constructor(private route: ActivatedRoute){}

  additionalCosts(orders: OrderInfo[]){
    this.changedTotal = 0; //RESET

    orders.forEach(item => {
      this.changedTotal = this.changedTotal + (item.orderPrice * item.orderQuantity);
    });
    
    if(this.sumTotal != this.changedTotal){
      this.sumTotal = Math.round(this.changedTotal*100)/100;
      this.salesTax = Math.round((this.sumTotal*this.TAX)*100)/100
      this.grandTotalCost = Math.round((this.sumTotal + this.salesTax + this.shippingCost)*100)/100;
    }
    
    this.customerOrder.sumTotal = this.sumTotal;
    this.customerOrder.salesTax = this.salesTax;
    this.customerOrder.shipping = this.shippingCost;
    this.customerOrder.grandTotal = this.grandTotalCost;    
  }

  applyOrder(addedOrder: OrderInfo){
    if (addedOrder.orderQuantity != 0){
      if (this.myOrders.length != 0){
        this.myOrders.forEach(order => {
          if (order.orderName == addedOrder.orderName){
            this.duplicate = true;
            order.orderQuantity = order.orderQuantity+addedOrder.orderQuantity;
          } 
        });
        if (this.duplicate == false){this.myOrders.push(addedOrder)}
        this.duplicate = false;
      }
      else{this.myOrders.push(addedOrder);}
    }
    

    this.additionalCosts(this.myOrders)
  }

  changeOrder(changedCart: OrderInfo[]){ 
    this.myOrders = changedCart;
    this.additionalCosts(this.myOrders);
  }
  selectItem(itemName:string){
    console.log(itemName);
    this.showItemPopUp = true;
    this.selectedItem = itemName;
  }

  toggleCartPopUp(result: boolean){
    this.showCartPopUp = result;
  }

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    const paramValue = queryParams['start'];
    console.log(queryParams);
    switch(queryParams.start){
      case "AllThings":
      case "BrightlyBeams":
      case "Loss":
      case "Refraction":
        this.selectItem(queryParams.start)
        break;
      default:
        break;
    }
  }
  
}

