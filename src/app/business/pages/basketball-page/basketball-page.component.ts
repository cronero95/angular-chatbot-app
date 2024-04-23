import { Component } from '@angular/core';

import { SportInfoComponent } from '../../components/sport-info/sport-info.component';

import { SportInfo } from '../../../interfaces/sport-info.interface';

@Component({
  standalone: true,
  imports: [
    SportInfoComponent,
  ],
  templateUrl: './basketball-page.component.html',
  styles: ``
})
export default class BasketballPageComponent {

  public readonly basketballInfo?: SportInfo;

  constructor() {
    this.basketballInfo = {
      title: 'Basketball Courts',
      firstParagraph: `Introducing the <span class="font-bold">San Marco's Courts</span>, where every dribble and dunk echoes the legacy of basketball greats! Our basketball courts are crafted from the finest wood, offering a grip that sets the stage for legendary plays.
      <br><br>
      <span class="font-bold">NBA-Grade Surfaces:</span> The wood used in our courts is selected for its superior quality and performance, ensuring that every pivot and jump shot is executed with precision. The excellent grip minimizes slips and maximizes control, making you feel like you’re part of an NBA game.`,
      secondParagraph: `<span class="font-bold">Feel the Pro Experience:</span> Step onto our courts and be transported to the big leagues. The smooth, polished surface mirrors the professional courts, giving you the authentic feel of playing in a grand arena.
      <br><br>
      <span class="font-bold">Elevate Your Game:</span> Whether you’re practicing your three-pointers or engaging in a full-court press, our courts are the perfect venue to take your skills to the next level. With lines clearly marked and hoops set at regulation height, you’re all set for an immersive basketball experience.`,
      thirdParagraph: `At <span class="font-bold">San Marco's Courts</span>,  we’re not just about providing a place to play; we’re about creating an environment where passion for basketball thrives. Come join a pick-up game, enroll in our skills workshops, or just shoot some hoops. It’s all about the love of the game here! 🏀🌟`,
      images: {
        image_01: '../../assets/images/basketball/basketball_01.jfif',
        image_02: '../../assets/images/basketball/basketball_02.jfif',
        image_03: '../../assets/images/basketball/basketball_03.jfif',
        image_04: '../../assets/images/basketball/basketball_04.jfif',
      },
    };
  }

}
