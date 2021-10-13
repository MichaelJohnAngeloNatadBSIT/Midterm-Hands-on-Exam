import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favoriteAnimes = [
    {
      'poster' : 'assets/img/terror.jpg',
      'title' : 'Terror In Resonance',
      'comment' : 'Good Anime, Loved the Characters',
      'rating' : '8.5',
    },
    {
      'poster' : 'assets/img/violet.jpg',
      'title' : 'Violet Evergarden',
      'comment' : 'Emotional Anime',
      'rating' : '9',
    },
    {
      'poster' : 'assets/img/saiki.jpg',
      'title' : 'The Disastrous Life of Saiki K.',
      'comment' : 'Laughed my ass off',
      'rating' : '8',
    },
    {
      'poster' : 'assets/img/yourlie.jpg',
      'title' : 'Your Lie In April',
      'comment' : 'Whyyyyyy???? Whyyyyyyyyyyyyyyy!!???',
      'rating' : '9',
    },
    {
      'poster' : 'assets/img/noragami.jpg',
      'title' : 'Noragami',
      'comment' : 'Where is the S3?',
      'rating' : '8',
    },
  ]

  constructor() {}

}
