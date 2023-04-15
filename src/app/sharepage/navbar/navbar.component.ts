import { Component } from '@angular/core';

import { ICarouselItem } from 'src/app/data/interfaces/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

}
