import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService as PrimeMessageService } from 'primeng/api';

import { MessageService } from '../../../services/message.service';

import { MessageSent } from '../../../interfaces/request.interface';

@Component({
  selector: 'shared-message-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextareaModule,
    ButtonModule,
    DividerModule,
    ToastModule,
  ],
  templateUrl: './message-form.component.html',
  styles: ``,
  providers: [
    PrimeMessageService,
  ]
})
export class MessageFormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly primeMessageService = inject(PrimeMessageService);

  public myForm: FormGroup = this.formBuilder.group({
    message: ['', [Validators.required, Validators.minLength(2)]],
  });

  sendMessage(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    };

    const messageSent: MessageSent = {
      content: this.myForm.controls['message'].value,
    };

    this.messageService.onMessageSent(messageSent)
      .subscribe({
        error: (errorMessage) => {
          this.primeMessageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
        }
      });
  }

  deleteChat(): void {
    this.messageService.onDeleteChat()
      .subscribe({
        error: (errorMessage) => {
          this.primeMessageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
        }
      });
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `The text must have at least ${errors['minlength'].requiredLength} characters.`;

        default:
          return '';
      }
    }

    return '';
  }
}
