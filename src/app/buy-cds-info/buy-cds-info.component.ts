import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-buy-cds-info',
  templateUrl: './buy-cds-info.component.html',
  styleUrls: ['./buy-cds-info.component.css']
})
export class BuyCdsInfoComponent implements OnInit, OnChanges{

  @Input() itemPopUp:boolean;
  @Output() itemPopUpChange = new EventEmitter<boolean>();
  @Input() chosenItem:string;


  constructor() { }

  
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
