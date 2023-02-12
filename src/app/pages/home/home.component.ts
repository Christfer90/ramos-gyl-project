import { Component, Input } from '@angular/core';
import { ICarouselItem } from 'src/app/data/interfaces/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
}
