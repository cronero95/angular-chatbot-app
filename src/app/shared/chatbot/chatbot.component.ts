import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { MessageSent } from '../../interfaces/request.interface';

@Component({
  selector: 'shared-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './chatbot.component.html',
  styles: ``
})
export class ChatbotComponent {

  private readonly messageService = inject(MessageService);

  sendMessage(message: string): void {

    const messageSent: MessageSent = {
      content: message,
    };

    this.messageService.onMessageSent(messageSent);
  }

}
