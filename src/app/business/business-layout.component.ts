import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatbotComponent } from '../shared/chatbot/chatbot.component';

@Component({
  standalone: true,
  imports: [
    ChatbotComponent,
    RouterModule,
  ],
  templateUrl: './business-layout.component.html',
  styles: ``
})
export default class BusinessComponent { }
