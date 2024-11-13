import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AllVideos } from './allVideos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  title = 'Video List';
  @ViewChild('filter', {read: ElementRef, static: true}) filter_element : ElementRef<any>;  
  AllVideos = new AllVideos()
  
 

  
  all_videos = this.AllVideos.ensemble_videos.concat(this.AllVideos.six_videos.concat(this.AllVideos.wood_videos));
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
        this.presenting_videos = this.AllVideos.ensemble_videos;  
        break;
      case "six":
        this.sixVisible = true;
        this.presenting_videos = this.AllVideos.six_videos;
        break;
      case "wood":
        this.woodVisible = true;
        this.presenting_videos = this.AllVideos.wood_videos;
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
    this.presenting_videos = this.AllVideos.ensemble_videos;
  }
  showSix(){
    this.allHidden();
    this.presenting_videos = this.AllVideos.six_videos;
  }
  showWood(){
    this.allHidden();
    this.presenting_videos = this.AllVideos.wood_videos;
  }
}
