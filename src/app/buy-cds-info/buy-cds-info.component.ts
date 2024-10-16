import { Component, OnInit, Input, Output, AfterViewChecked, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-buy-cds-info',
  templateUrl: './buy-cds-info.component.html',
  styleUrls: ['./buy-cds-info.component.css']
})
export class BuyCdsInfoComponent implements OnInit, OnChanges{

  @Input() childBucket:boolean;
  @Output() showPopUp:boolean;



  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.childBucket, this.showPopUp);
    console.log('param changes', changes);
    // console.log(button)
    // if(changes.childBucket.firstChange) return;
    this.parseData();
  }

  // ngAfterViewInit(): void {}
  // ngAfterViewChecked(): void {
    
  // }

  ngOnInit(): void {
    this.parseData();  
    console.log(this.childBucket, this.showPopUp);  
  }
  
  parseData(){
    this.showPopUp = this.childBucket;
  }
}
