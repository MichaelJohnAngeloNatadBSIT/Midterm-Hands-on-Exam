import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  forums = [
    {
      'icon': 'assets/img/mio.png',
      'name': 'Mio',
      'subject': 'Where is Elizabass',
      'message': 'Lets Practice Today...',
      'badgeType': 'primary',
      'value': '5',
    },
    {
      'icon': 'assets/img/nine.jpg',
      'name': 'Nine',
      'subject': 'Plans good',
      'message': 'Are the bombs already set?',
      'badgeType': 'secondary',
      'value': '3',
    },
    {
      'icon': 'assets/img/twelve.jpg',
      'name': 'Twelve',
      'subject': 'I love Bombs',
      'message': 'Should I detonate it?',
      'badgeType': 'warning',
      'value': '4',
    },
    {
      'icon': 'assets/img/okarin.jpg',
      'name': 'Okarin',
      'subject': 'D-mail Works',
      'message': 'I have changed the Future.',
      'badgeType': 'danger',
      'value': '3',
    },
    {
      'icon': 'assets/img/makise.jpg',
      'name': 'Kurisutina',
      'subject': 'Dumb Okabe',
      'message': 'Never Gonna Give you up.',
      'badgeType': 'light',
      'value': '2',
    },
  ]

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.route.navigateByUrl('/home');

  }

  
  constructor(private route: Router) {}

}
