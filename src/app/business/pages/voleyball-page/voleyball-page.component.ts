import { Component } from '@angular/core';

import { SportInfoComponent } from '../../components/sport-info/sport-info.component';
import { SportInfo } from '../../../interfaces/sport-info.interface';

@Component({
  standalone: true,
  imports: [
    SportInfoComponent,
  ],
  templateUrl: './voleyball-page.component.html',
  styles: ``
})
export default class VoleyballPageComponent {

  public readonly volleyballInfo?: SportInfo;

  constructor() {
    this.volleyballInfo = {
      title: 'Volleyball Courts',
      firstParagraph: `Step into the <span class="font-bold">San Marco's Courts</span>, where excellence and elegance meet! Our volleyball courts are a masterpiece of design, crafted from premium quality wood that ensures a playing experience like no other.
      <br><br>
      <span class="font-bold">Superior Craftsmanship:</span> Each court is a testament to our commitment to quality, featuring a smooth, flawless surface that allows for optimal performance. The high-grade wood provides the perfect balance of grip and give, ensuring that every dive and jump is supported by the best materials in the industry.`,
      secondParagraph: `<span class="font-bold">Worry-Free Play:</span> Forget about the distractions of subpar courts. Our wooden surfaces are meticulously maintained to prevent any issues that could interrupt your game. From the precision of the lines to the sturdiness of the net poles, every detail is checked to guarantee a problem-free match.
      <br><br>
      <span class="font-bold">Aesthetic Appeal:</span> Not only are our courts functional, but they also add a touch of class to your sporting events. The rich, warm tones of the wood create an inviting atmosphere that enhances the overall experience for players and spectators alike.`,
      thirdParagraph: `At <span class="font-bold">San Marco's Courts</span>, we don’t just provide a place to play; we offer a venue where memories are made, skills are honed, and the spirit of volleyball is celebrated. Join us for open play, tournaments, or special events and discover the difference that quality can make. 🏐✨`,
      images: {
        image_01: '../../assets/images/volleyball/volleyball_01.jfif',
        image_02: '../../assets/images/volleyball/volleyball_02.jfif',
        image_03: '../../assets/images/volleyball/volleyball_03.jfif',
        image_04: '../../assets/images/volleyball/volleyball_04.jfif',
      },
    };
  }
}
