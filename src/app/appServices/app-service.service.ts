import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  courses;

  constructor() {
    this.courses = [
      { imageUrl: "./assets/images/math.jpg", text: "MATH", rout: "/math", imageUrl1: "./assets/images/KidsPuzzle.jpg", text1: "GAME", imageUrl2: "./assets/images/videos.png", text2: "VIDEOS" },
      { imageUrl: "./assets/images/words.gif", text: "Vocabulary", imageUrl1: "./assets/images/story.gif", text1: "STORY TIME", imageUrl2: "./assets/images/bColor.png", }
    ];

  }
  getCourses() {
    return this.courses;
  }
}
