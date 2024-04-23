import { Component } from '@angular/core';

import { SportInfoComponent } from '../../components/sport-info/sport-info.component';

import { SportInfo } from '../../../interfaces/sport-info.interface';

@Component({
  standalone: true,
  imports: [
    SportInfoComponent,
  ],
  templateUrl: './sandy-voleyball-page.component.html',
  styles: ``
})
export default class SandyVoleyballPageComponent {
  public readonly sandyVolleyballInfo?: SportInfo;

  constructor() {
    this.sandyVolleyballInfo = {
      title: 'Sandy Volleyball Courts',
      firstParagraph: `Welcome to <span class="font-bold">San Marco's Courts</span>, where every serve and spike is accompanied by the essence of Brazil’s sun-kissed shores! Our sand volleyball courts are not just a place to play; they’re a slice of paradise, meticulously filled with authentic beach sand.
      <br><br>
      <span class="font-bold">Authentic Beach Vibes:</span>  Immerse yourself in the sensation of soft, golden sands underfoot, transported directly from the picturesque beaches of Brazil. Each grain tells a story of sunny days and samba rhythms, creating an ambiance that’s both invigorating and relaxing.`,
      secondParagraph: `<span class="font-bold">Play Like a Pro:</span> Whether you’re a seasoned player or a casual enthusiast, our courts offer the perfect setting to unleash your potential. The high-quality sand ensures consistent playability, providing the ideal resistance for those dynamic leaps and agile movements.
      <br><br>
      <span class="font-bold">A Getaway in the City:</span> Escape the hustle and bustle without leaving town. Our sand volleyball courts are your gateway to a tropical experience, where every match feels like a beach tournament under the Brazilian sun.`,
      thirdParagraph: `At <span class="font-bold">San Marco's Courts</span>, we bring the beach to you. Gather your team, join a league, or just drop in for a casual game. It’s more than just volleyball; it’s a celebration of sport, sun, and sand. Come feel the warmth! 🌴🏐`,
      images: {
        image_01: '../../assets/images/sandy_volleyball/sandy_volleyball_01.jfif',
        image_02: '../../assets/images/sandy_volleyball/sandy_volleyball_02.jfif',
        image_03: '../../assets/images/sandy_volleyball/sandy_volleyball_03.jfif',
        image_04: '../../assets/images/sandy_volleyball/sandy_volleyball_04.jfif',
      },
    };
  }
}
