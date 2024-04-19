import { Component, signal } from '@angular/core';

import { CardModule } from 'primeng/card';

import { ChatbotComponent } from '../shared/chatbot/chatbot.component';
import { CardComponent } from './components/card/card.component';

import { CardBody } from '../interfaces/card.interface';

@Component({
  standalone: true,
  imports: [
    ChatbotComponent,
    CardModule,
    CardComponent,
  ],
  templateUrl: './business-layout.component.html',
  styles: ``
})
export default class BusinessComponent {

  public myCards = signal<CardBody[]>([]);

  constructor() {
    this.myCards.set([
      {
        title: 'Football Courts',
        description: 'Our football courts are the best in the city. You can find courts to 5vs5 games, 7vs7 games and, by request, 11vs11 games.',
        image: '../../assets/card-images/futbol.jfif',
      },
      {
        title: 'Wood Volleyball Courts',
        description: `Our wood volleyball courts are made with high quality wood, so you don't have to worry about any problem.`,
        image: '../../assets/card-images/voleybol_arena.jfif',
      },
      {
        title: 'Sand Volleyball Courts',
        description: `Our sand volleyball courts contain authentic beach sand, you'll feel like you are in a Brazilian beach.`,
        image: '../../assets/card-images/voleybol_madera.jfif',
      },
      {
        title: 'Basketball Courts',
        description: `Our basketball courts are made of wood, which provides great grip. You'll feel like a NBA player.`,
        image: '../../assets/card-images/basquetbol.jfif',
      },
    ]);
  }

}
