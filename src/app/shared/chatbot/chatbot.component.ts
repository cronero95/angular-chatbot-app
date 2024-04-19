import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageService } from '../../services/message.service';

import { MessageFormComponent } from '../components/message-form/message-form.component';

import { UserResponse } from '../../interfaces/request-response.interface';

@Component({
  selector: 'shared-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MessageFormComponent,
  ],
  templateUrl: './chatbot.component.html',
  styles: ``
})
export class ChatbotComponent {

  private readonly messageService = inject(MessageService);

  public messageHistory = computed<UserResponse[]>(() => this.messageService.messageHistorySignal());

}
