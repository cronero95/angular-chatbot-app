import { Component, ElementRef, ViewChild, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToggleButtonModule } from 'primeng/togglebutton';

import { MessageService } from '../../services/message.service';

import { MessageFormComponent } from '../components/message-form/message-form.component';
import { MessageBoxComponent } from '../components/message-box/message-box.component';

import { UserResponse } from '../../interfaces/request-response.interface';

@Component({
  selector: 'shared-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MessageFormComponent,
    MessageBoxComponent,
    ToggleButtonModule,
  ],
  templateUrl: './chatbot.component.html',
  styles: ``
})
export class ChatbotComponent {

  private readonly messageService = inject(MessageService);

  public messageHistory = computed<UserResponse[]>(() => this.messageService.messageHistorySignal());

  @ViewChild('txtChat') public chat?: ElementRef<HTMLDivElement>;

  public toggleChat(): void {
    this.chat!.nativeElement.style.display = (
      this.chat!.nativeElement.style.display == 'none' ? 'block' : 'none'
    );
  }

}
