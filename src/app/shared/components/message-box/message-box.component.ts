import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';

import { UserResponse } from '../../../interfaces/request-response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-message-box',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
  ],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {

  @Input() message?: UserResponse;

}
