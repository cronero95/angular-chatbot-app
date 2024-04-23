import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatbotComponent } from '../shared/chatbot/chatbot.component';
import { CardComponent } from './components/card/card.component';

@Component({
  standalone: true,
  imports: [
    ChatbotComponent,
    CardComponent,
    RouterModule,
  ],
  templateUrl: './business-layout.component.html',
  styles: ``
})
export default class BusinessComponent { }
