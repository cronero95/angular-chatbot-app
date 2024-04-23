import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { SportInfo } from '../../../interfaces/sport-info.interface';

@Component({
  selector: 'business-sport-info',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
  ],
  templateUrl: './sport-info.component.html',
  styles: ``
})
export class SportInfoComponent implements AfterViewInit {

  @Input() sportInformation?: SportInfo;

  @ViewChild('txtFirst') public firstParagraph!: ElementRef<HTMLParagraphElement>;
  @ViewChild('txtSecond') public secondParagraph!: ElementRef<HTMLParagraphElement>;
  @ViewChild('txtThird') public thirdParagraph!: ElementRef<HTMLParagraphElement>;

  ngAfterViewInit(): void {
    this.firstParagraph.nativeElement.innerHTML = this.sportInformation!.firstParagraph;
    this.secondParagraph.nativeElement.innerHTML = this.sportInformation!.secondParagraph;
    this.thirdParagraph.nativeElement.innerHTML = this.sportInformation!.thirdParagraph;
  }
}
