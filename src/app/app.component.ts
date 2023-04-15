import { Component } from '@angular/core';
import { ICarouselItem } from 'src/app/data/interfaces/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ramos-gil-project';

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

}
