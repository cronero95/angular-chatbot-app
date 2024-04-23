import { Component } from '@angular/core';

import { SportInfoComponent } from '../../components/sport-info/sport-info.component';

import { SportInfo } from '../../../interfaces/sport-info.interface';

@Component({
  standalone: true,
  imports: [
    SportInfoComponent,
  ],
  templateUrl: './football-page.component.html',
  styles: ``
})
export default class FootballPageComponent {

  public readonly footballInfo?: SportInfo;

  constructor() {
    this.footballInfo = {
      title: 'Football Courts',
      firstParagraph: `Welcome to <span class="font-bold">San Marco's Courts</span>, the ultimate destination for football enthusiasts! Our state-of-the-art football courts are renowned for being the finest in the city, offering an unparalleled experience for players of all levels.
      <br><br>
      <span class="font-bold">5-a-Side Fury:</span> Dive into the fast-paced world of 5vs5 games on our compact courts, designed to enhance close ball control and quick decision-making. Perfect for a friendly match or a competitive tournament, these courts are a hotbed for cultivating teamwork and individual skills.`,
      secondParagraph: `<span class="font-bold">The Magnificent Seven:</span> Elevate your game on our expansive 7vs7 courts. With more room to maneuver, these pitches are ideal for those who love the thrill of strategy and space. It’s where local legends are born and unforgettable matches are played.
      <br><br>
      <span class="font-bold">The Full Squad Experience:</span> By special request, we can prepare a full-sized pitch for the ultimate 11vs11 game. Experience football in its purest form, where every pass counts and every goal is a story. Whether you’re training for a league or just want to feel like a pro, our full-sized courts are ready to host your epic battles.`,
      thirdParagraph: `At <span class="font-bold">San Marco's Courts</span>, we believe in fostering a community of passion and sportsmanship. Our facilities are equipped with top-notch amenities, including LED lighting for night games, high-quality turf that mimics real grass, and comfortable seating for spectators. Join us for a match, enroll in our training programs, or simply enjoy the vibrant atmosphere. Your love for the game has a new home here! 🏟️⚽`,
      images: {
        image_01: '../../assets/images/football/football_01.jfif',
        image_02: '../../assets/images/football/football_02.jfif',
        image_03: '../../assets/images/football/football_03.jfif',
        image_04: '../../assets/images/football/football_04.jfif',
      },
    };
  }
}
