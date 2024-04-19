import { Component, Input } from '@angular/core';

import { PanelModule } from 'primeng/panel';

import { UserResponse } from '../../../interfaces/request-response.interface';

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [
    PanelModule,
  ],
  templateUrl: './message-box.component.html',
  styles: ``
})
export class MessageBoxComponent {

  @Input() message?: UserResponse;

}
