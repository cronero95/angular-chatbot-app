import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { MessageService } from '../../../services/message.service';

import { MessageSent } from '../../../interfaces/request.interface';

@Component({
  selector: 'shared-message-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextareaModule,
    ButtonModule,
  ],
  templateUrl: './message-form.component.html',
  styles: ``
})
export class MessageFormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly messageService = inject(MessageService);

  public myForm: FormGroup = this.formBuilder.group({
    message: ['', [Validators.required, Validators.minLength(2)]],
  });

  sendMessage(): void {

    const messageSent: MessageSent = {
      content: this.myForm.controls['message'].value,
    };

    //this.messageService.onMessageSent(messageSent);
    console.log({messageSent});
  }

  deleteChat(): void {
    //this.messageService.onDeleteChat();
    console.log('Chat deleted');
  }
}
