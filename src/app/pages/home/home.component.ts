import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from 'src/app/data/interfaces/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  ngOnInit()
  {
    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }

}

