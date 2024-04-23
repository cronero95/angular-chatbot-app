import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { SportInfo } from '../../../interfaces/sport-info.interface';

@Component({
  selector: 'business-sport-info',
  standalone: true,
  imports: [],
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
