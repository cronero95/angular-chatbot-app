import { Component, signal } from '@angular/core';

import { CardComponent } from "../../components/card/card.component";

import { CardBody } from '../../../interfaces/card.interface';

@Component({
  standalone: true,
  imports: [
    CardComponent,
  ],
  templateUrl: './main-page.component.html',
  styles: ``
})
export default class MainPageComponent {

  public myCards = signal<CardBody[]>([]);

  constructor() {
    this.myCards.set([
      {
        title: 'Football Courts',
        description: 'Our football courts are the best in the city. You can find courts to 5vs5 games, 7vs7 games and, by request, 11vs11 games.',
        image: '../../assets/images/card-images/football.jfif',
      },
      {
        title: 'Wood Volleyball Courts',
        description: `Our wood volleyball courts are made with high quality wood, so you don't have to worry about any problem.`,
        image: '../../assets/images/card-images/sandy_voleyball.jfif',
      },
      {
        title: 'Sand Volleyball Courts',
        description: `Our sand volleyball courts contain authentic beach sand, you'll feel like you are in a Brazilian beach.`,
        image: '../../assets/images/card-images/voleyball.jfif',
      },
      {
        title: 'Basketball Courts',
        description: `Our basketball courts are made of wood, which provides great grip. You'll feel like a NBA player.`,
        image: '../../assets/images/card-images/basketball.jfif',
      },
    ]);
  }

}
