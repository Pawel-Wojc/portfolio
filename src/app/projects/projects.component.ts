import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @ViewChild('slides') slides!: ElementRef;
  images: HTMLImageElement[] = [];
  slideIndex: number = 0;
  intervalId: any = null;
  constructor() {}
  ngAfterViewInit() {
    this.images = this.slides.nativeElement.querySelectorAll('img');
    console.log(this.images);
    this.initializedSlider();
  }

  initializedSlider() {
    if (this.images.length > 0) {
      this.images[this.slideIndex].classList.add('displaySlide');
      this.intervalId = setInterval(this.nextSlide, 5000);
    }
  }

  showSlide() {
    if (this.slideIndex >= this.images.length) {
      this.slideIndex = 0;
    } else if (this.slideIndex < 0) {
      this.slideIndex = this.images.length - 1;
    }
    this.images.forEach((image) => {
      image.classList.remove('displaySlide');
    });

    this.images[this.slideIndex].classList.add('displaySlide');
  }

  prevSlide() {
    clearInterval(this.intervalId);
    this.slideIndex--;
    this.showSlide();
  }

  nextSlide() {
    clearInterval(this.intervalId);
    this.slideIndex++;
    this.showSlide();
  }
}
