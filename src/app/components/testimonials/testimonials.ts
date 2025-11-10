// import { Component } from '@angular/core';
// import { ViewChild, ElementRef } from '@angular/core';

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  img: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css'],
})

export class Testimonials {
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;

  testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: 'Anna Svensson',
      quote: 'Fantastisk mat och supertrevlig personal!',
      rating: 5,
      img: 'assets/images/testimonial1.jpg'
    },
    {
      id: 2,
      name: 'Johan Nilsson',
      quote: 'Bästa pizzan i stan!',
      rating: 4,
      img: 'assets/images/testimonial2.jpg'
    },
    {
      id: 3,
      name: 'Maria Karlsson',
      quote: 'Mysig atmosfär och prisvärd meny.',
      rating: 5,
      img: 'assets/images/testimonial3.jpg'
    }
  ];

  scrollByCard(direction: 'left' | 'right' = 'right') {
    const container = this.container?.nativeElement;
    if (!container) return;

    const card = container.querySelector('.testimonial-card') as HTMLElement;
    if (!card) return;

    const style = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseInt(style.marginRight || '20', 10);
    const scrollAmount = direction === 'right' ? cardWidth : -cardWidth;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}