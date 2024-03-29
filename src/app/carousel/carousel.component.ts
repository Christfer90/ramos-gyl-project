import { Component, Input } from '@angular/core';
import { ICarouselItem } from '../data/interfaces/icarousel-item.metadata';
import { MenuService } from '../service/menu.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss', './carousel.component.css']
})
export class CarouselComponent {
    /**
    * Custom Properties
  */
    @Input() height = 800;
    @Input() isFullScreen = false;
    @Input() items: ICarouselItem[] = [];
    @Input() autoSlide = false;
    @Input() slideInternal = 6000;
  
    /**
     * Final Properties
     */
    public finalHeight: string | number = 0;
    public currentPosition = 0;
  
    constructor( private menuService: MenuService) {
      this.menuService.loadScript();
      this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
     }
  
    ngOnInit() {
      this.items.map( ( i, index ) => {
        i.id = index;
        i.marginLeft = 0;
        i.width = 10;
      });
      if(this.autoSlide)
      {
        this.autoSlideImages();
      }
      AOS.init()
      window.addEventListener('load', AOS.refresh)
    }
  
    setCurrentPosition(position: number) {
      this.currentPosition = position;
      this.items.find((i) => i.id === 0)!.marginLeft = position;      
    }
  
    setNext() {
      let finalPercentage = 0;
      let nextPosition = this.currentPosition + 1;
      if (nextPosition <= this.items.length - 1) {
        finalPercentage = -100 * nextPosition;
      } else {
        nextPosition = 0;
      }
      this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
      this.currentPosition = nextPosition;
    }
  
    setBack() {
      let finalPercentage = 0;
      let backPosition = this.currentPosition  - 1;
      if (backPosition >= 0) {
        finalPercentage = -100 * backPosition;
      } else {
        backPosition = this.items.length - 1;
        finalPercentage = -100 * backPosition;
      }
      this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
      this.currentPosition = backPosition;
    }

    autoSlideImages() {
      setInterval(() => {
        this.setNext();
      }, this.slideInternal)
    }
}
