import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options2 } from '../constant';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesStore!: any[];
  public customOptions2: OwlOptions = options2;
  ngOnInit(): void {
    this.slidesStore = [
      {
        id : 1,
        src: "assets/img/brand-1.png",
        alt: "node",
        title: "node",
      },
      {
        id : 2,
        src: "assets/img/brand-2.png",
        alt: "php",
        title: "php",
      },
      {
        id : 3,
        src: "assets/img/brand-3.png",
        alt: "typescript",
        title: "typescript",
      },
      {
        id : 4,
        src: "assets/img/brand-4.png",
        alt: "angular",
        title: "angular",
      },
      {
        id : 5,
        src: "assets/img/brand-5.png",
        alt: "aws",
        title: "amazon web services",
      },
      {
        id : 6,
        src: "assets/img/brand-6.png",
        alt: "laravel",
        title: "laravel",
      },
      {
        id : 7,
        src: "assets/img/brand-7.png",
        alt: "javascript",
        title: "javascript",
      }
    ];
  }
}
