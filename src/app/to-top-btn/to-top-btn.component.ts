import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-to-top-btn',
  templateUrl: './to-top-btn.component.html',
  styleUrls: ['./to-top-btn.component.css']
})
export class ToTopBtnComponent implements OnInit {
  constructor() { }

  atTop: boolean = true;

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (verticalOffset != 0){
      this.atTop = false;
    }
    else {
      this.atTop = true;
    }

    console.log(this.atTop);
}

  toTop(){
    window.scrollTo(0,0);
  }

  ngOnInit(): void {
  }

}
