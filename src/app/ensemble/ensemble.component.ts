import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mybody',
  templateUrl: './ensemble.component.html',
  styleUrls: ['./ensemble.component.css']
})
export class EnsembleComponent implements OnInit {
  @ViewChild('videoHolder') videoHolder!: ElementRef;
  
  constructor() { }

  fadeOut_bool: boolean = false
  
  fadeOut(){
    let parent = this.videoHolder.nativeElement.children;
    this.fadeOut_bool = true;
    parent[1].muted = false;
    parent[1].controls = true;
    parent[1].autoplay = true;
  }
  ngOnInit() {
  }


}
