import { Component, WritableSignal, output, signal } from '@angular/core';
import { MessageSent } from '../../interfaces/request.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  public onSendMessage = output<WritableSignal<MessageSent>>();

  public newMessage = signal<MessageSent>(
    {
      content: '',
    }
  );

  emitMessage(message: string): void {
    this.newMessage.set({ content: message });
    this.onSendMessage.emit(this.newMessage);
    console.log(this.newMessage());
  }

}
