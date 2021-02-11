import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AppServiceService } from '../appServices/app-service.service'

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  @ViewChild('flags') mySlider: IonSlides;
  courses;

  constructor(public appServices: AppServiceService) { }
  onBack() {
    this.mySlider.slidePrev();
  }
  onForward() {
    this.mySlider.slideNext();
  }
  ngOnInit() {
    this.courses = this.appServices.getCourses();
  }

}
