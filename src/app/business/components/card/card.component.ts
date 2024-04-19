import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardBody } from '../../../interfaces/card.interface';

@Component({
  selector: 'business-card',
  standalone: true,
  imports: [
    CardModule,
  ],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {

  @Input() cardBody?: CardBody;

}
