import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  sushiImg = 'assets/food-3581341_1280.jpg';
  
  openVideo() {
    window.open('https://youtube.com/shorts/iPGcSSYL9Gg?si=XufFLtwC8Ja_MRDd', '_blank');
  }
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}

