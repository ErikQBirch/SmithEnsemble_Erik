import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  title = 'Video List';
  
  allVideos = [
    {
      name: "O Magnum Mysterium",
      group: "The Smith Ensemble",
      embed: "JnGAuYPwVaM",
      filter: "ensemble"
    },
    {
      name: "Have Yourself a Merry Little Christmas",
      group: "The Smith Six",
      embed: "GZDnCmSxnSY",
      filter: "six"
    },
    {
      name: "Look at the World",
      group: "The Smith Ensemble",
      embed: "kEUMsWoW8V8",
      filter: "ensemble"
    },
    {
      name: "Pilgrim Song",
      group: "The Smith Ensemble",
      embed: "n9a_5N3vSJg",
      filter: "ensemble"
    },
    {
      name: "Born on a new Day",
      group: "The Smith Ensemble",
      embed: "CjmUJSkxqIg",
      filter: "ensemble"
    },
    {
      name: "Side By Side",
      group:"The Smith Six",
      embed: "HKf1Jwho0rc",
      filter: "six"
    },
    {
      name: "Be My Little Baby Bumblebee",
      group: "The Smith Six",
      embed: "15DUKIx7p-w",
      filter: "six"
    },
    {
      name: "O Magnum Mysterium",
      group: "The Smith Ensemble",
      embed: "JnGAuYPwVaM",
      filter: "ensemble"
    },
    {
      name: "Have Yourself a Merry Little Christmas",
      group: "The Smith Six",
      embed: "GZDnCmSxnSY",
      filter: "six"
    },
    {
      name: "Look at the World",
      group: "The Smith Ensemble",
      embed: "kEUMsWoW8V8",
      filter: "ensemble"
    },
    {
      name: "Pilgrim Song",
      group: "The Smith Ensemble",
      embed: "n9a_5N3vSJg",
      filter: "ensemble"
    },
    {
      name: "Born on a new Day",
      group: "The Smith Ensemble",
      embed: "CjmUJSkxqIg",
      filter: "ensemble"
    },
    {
      name: "Side By Side",
      group:"The Smith Six",
      embed: "HKf1Jwho0rc",
      filter: "six"
    },
    {
      name: "Be My Little Baby Bumblebee",
      group: "The Smith Six",
      embed: "15DUKIx7p-w",
      filter: "six"
    }
  ]


  videoListCol_one = [
    {
      name: "O Magnum Mysterium",
      group: "The Smith Ensemble",
      embed: "JnGAuYPwVaM",
      filter: "ensemble"
    },
    {
      name: "Have Yourself a Merry Little Christmas",
      group: "The Smith Six",
      embed: "GZDnCmSxnSY",
      filter: "six"
    },
    {
      name: "Look at the World",
      group: "The Smith Ensemble",
      embed: "kEUMsWoW8V8",
      filter: "ensemble"
    },
    {
      name: "Pilgrim Song",
      group: "The Smith Ensemble",
      embed: "n9a_5N3vSJg",
      filter: "ensemble"
    },
    {
      name: "Born on a new Day",
      group: "The Smith Ensemble",
      embed: "CjmUJSkxqIg",
      filter: "ensemble"
    },
    {
      name: "Side By Side",
      group:"The Smith Six",
      embed: "HKf1Jwho0rc",
      filter: "six"
    },
    {
      name: "Be My Little Baby Bumblebee",
      group: "The Smith Six",
      embed: "15DUKIx7p-w",
      filter: "six"
    }
  ];

  videoListCol_two = [
    {
      name: "Savior, Redeemer of My Soul",
      group: "The Smith Ensemble",
      embed: "pPAb4DQsIm8",
      filter: "ensemble"
    },
    {
      name: "Africa (cover)",
      group: "The Smith Six",
      embed: "Bt5KjlZFv-4",
      filter: "six"
    },
    {
      name: "The Lord is my Shepard",
      group: "The Smith Ensemble",
      embed: "9QBN3HBA9iY",
      filter: "ensemble"
    },
    {
      name: "Amazing Grace",
      group: "The Smith Ensemble",
      embed: "qu3MSnV7WRA",
      filter: "ensemble"
    },
    {
      name: "Pie Jesu",
      group: "The Smith Ensemble",
      embed: "qrvr9EWuhRc",
      filter: "ensemble"
    }
    ,
    {
      name: "Prayer of the Children",
      group:"The Smith Six",
      embed: "tzqJwQ1htZE",
      filter: "six"
    },
    {
      name: "Bye, Bye Blues",
      group: "The Smith Six",
      embed: "I5JQOJmTZh0",
      filter: "six"
    }
    


  ];

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {
   }

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    const paramValue = queryParams['filter'];
    console.log(queryParams.filter);

    switch(queryParams.filter){
      case "ensemble":
      case "six":
        break;
      default:
        break;
    }




  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + item.embed);
  }

}
