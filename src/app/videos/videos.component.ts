import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  title = 'Video List';

  videoListCol_one = [
    {
      name: "O Magnum Mysterium",
      group: "The Smith Ensemble",
      embed: "JnGAuYPwVaM"
    },
    {
      name: "Have Yourself a Merry Little Christmas",
      group: "The Smith Six",
      embed: "GZDnCmSxnSY"
    },
    {
      name: "Look at the World",
      group: "The Smith Ensemble",
      embed: "kEUMsWoW8V8"
    },

    {
      name: "Pilgrim Song",
      group: "The Smith Ensemble",
      embed: "n9a_5N3vSJg"
    },
 
    {
      name: "Born on a new Day",
      group: "The Smith Ensemble",
      embed: "CjmUJSkxqIg"
    },

    {
      name: "Side By Side",
      group:"The Smith Six",
      embed: "HKf1Jwho0rc"
    }
   


  ];

  videoListCol_two = [
    {
      name: "Savior, Redeemer of My Soul",
      group: "The Smith Ensemble",
      embed: "pPAb4DQsIm8"
    },
    {
      name: "Africa (cover)",
      group: "The Smith Six",
      embed: "Bt5KjlZFv-4"
    },
    {
      name: "The Lord is my Shepard",
      group: "The Smith Ensemble",
      embed: "9QBN3HBA9iY"
    },

    {
      name: "Amazing Grace",
      group: "The Smith Ensemble",
      embed: "qu3MSnV7WRA"
    },

    {
      name: "Pie Jesu",
      group: "The Smith Ensemble",
      embed: "qrvr9EWuhRc"
    }
    ,

    {
      name: "Prayer of the Children",
      group:"The Smith Six",
      embed: "tzqJwQ1htZE"
    }
    


  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl(item){



    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + item.embed);
  }

}
