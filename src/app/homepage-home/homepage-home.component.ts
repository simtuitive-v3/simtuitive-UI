import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

declare let $: any

@Component({
  selector: 'app-homepage-home',
  templateUrl: './homepage-home.component.html',
  styleUrls: ['./homepage-home.component.scss']
})

export class HomepageHomeComponent implements OnInit, AfterViewInit {

  videoMobileLay

  @ViewChild('videoPlayer', { static: true })
  videoPlayer: ElementRef

  @HostListener('document:click', ['$event'])
  clickOutSideTheVideoBlock(e) {
    if (e.target.id) this.pauseVideoFn()
  }

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  ngAfterViewInit() {
  }

  openVideoModalFn() {
    $('#videoModal').modal('show')
    this.videoPlayer.nativeElement.play();
  }

  pauseVideoFn() {
    this.videoPlayer.nativeElement.pause();
  }

  videofn() {
    this.videoMobileLay = !this.videoMobileLay
  }

} //Main Closing Braces