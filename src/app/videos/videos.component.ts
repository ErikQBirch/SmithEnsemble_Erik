import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  title = 'Video List';
  @ViewChild('filter', {read: ElementRef, static: true}) filter_element : ElementRef<any>;  
  
  
  ensemble_videos = [
    {
      name: "O Magnum Mysterium",
      group: "The Smith Ensemble",
      embed: "JnGAuYPwVaM",
    },
    {
      name: "Look at the World",
      group: "The Smith Ensemble",
      embed: "kEUMsWoW8V8",
    },
    {
      name: "Pilgrim Song",
      group: "The Smith Ensemble",
      embed: "n9a_5N3vSJg",
    },
    {
      name: "Born on a new Day",
      group: "The Smith Ensemble",
      embed: "CjmUJSkxqIg",
    },
    {
      name: "Savior, Redeemer of My Soul",
      group: "The Smith Ensemble",
      embed: "pPAb4DQsIm8",
    },
    {
      name: "The Lord is my Shepard",
      group: "The Smith Ensemble",
      embed: "9QBN3HBA9iY",
    },
    {
      name: "Amazing Grace",
      group: "The Smith Ensemble",
      embed: "qu3MSnV7WRA",
    },
    {
      name: "Pie Jesu",
      group: "The Smith Ensemble",
      embed: "qrvr9EWuhRc",
    }
  ];
  six_videos = [
    {
      name: "Have Yourself a Merry Little Christmas",
      group: "The Smith Six",
      embed: "GZDnCmSxnSY",
    },
    {
      name: "Side By Side",
      group:"The Smith Six",
      embed: "HKf1Jwho0rc",
    },
    {
      name: "Be My Little Baby Bumblebee",
      group: "The Smith Six",
      embed: "15DUKIx7p-w",
    },
    {
      name: "Africa (cover)",
      group: "The Smith Six",
      embed: "Bt5KjlZFv-4",
    },
    {
      name: "Prayer of the Children",
      group:"The Smith Six",
      embed: "tzqJwQ1htZE",
    },
    {
      name: "Bye, Bye Blues",
      group: "The Smith Six",
      embed: "I5JQOJmTZh0",
    }
  ];
  wood_videos = [
    {
      name: "For the Beauty of the Earth",
      group:"Woodsmith",
      embed: "VWLJxZPmMPg",
    },
    {
      name: "Hymn Tune: Ellacombe (Let Zion in Her Beauty Rise)",
      group:"Woodsmith",
      embed: "Voz7WBJY2HE",
    },
  ];
  all_videos = this.ensemble_videos.concat(this.six_videos.concat(this.wood_videos));
  presenting_videos = [];

  allVisible = false;
  ensembleVisible = false;
  sixVisible = false;
  woodVisible = false;


  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {
   }



  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    this.runFilter(queryParams.filter);
    console.log(queryParams.filter);
    window.scrollTo(0,0);
  }
  

  getEmbedUrl(item: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + item.embed);
  }

  allHidden(){
    this.ensembleVisible = false;
    this.sixVisible = false;
    this.woodVisible = false;
    this.allVisible = false;
  }


  runFilter(filter: String){
    this.allHidden();
    console.log(filter);
    switch(filter){
      case "ensemble":
        this.ensembleVisible = true;
        this.presenting_videos = this.ensemble_videos;  
        break;
      case "six":
        this.sixVisible = true;
        this.presenting_videos = this.six_videos;
        break;
      case "wood":
        this.woodVisible = true;
        this.presenting_videos = this.wood_videos;
        break;
      default:
        this.allVisible = true;
        this.presenting_videos = this.all_videos;
        break;
    }
  }
  
  showAll(){
    this.allHidden();
    this.presenting_videos = this.all_videos;
  }
  showEnsemble(){
    this.allHidden();
    this.presenting_videos = this.ensemble_videos;
  }
  showSix(){
    this.allHidden();
    this.presenting_videos = this.six_videos;
  }
  showWood(){
    this.allHidden();
    this.presenting_videos = this.wood_videos;
  }
}
