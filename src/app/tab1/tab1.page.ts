import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
})
export class Tab1Page {
  selectTabs =  'favorites';
  animes = [
    {
      'poster': 'assets/img/erased.jpg',
      'posterTitle': 'Erased Poster',
      'title': 'Erased',
      'synopsis': "When tragedy is about to strike, Satoru Fujinuma finds himself sent back several minutes before the accident occurs. The detached, 29-year-old manga artist has taken advantage of this powerful yet mysterious phenomenon, which he calls 'Revival', to save many lives. However, when he is wrongfully accused of murdering someone close to him, Satoru is sent back to the past once again, but this time to 1988, 18 years in the past. Soon, he realizes that the murder may be connected to the abduction and killing of one of his classmates, the solitary and mysterious Kayo Hinazuki, that took place when he was a child. This is his chance to make things right. Boku dake ga Inai Machi follows Satoru in his mission to uncover what truly transpired 18 years ago and prevent the death of his classmate while protecting those he cares about in the present.",
    },
    {
      'poster': 'assets/img/K-on.jpg',
      'posterTitle': 'K-On Poster',
      'title': 'K-On',
      'synopsis': "A fresh high school year always means much to come, and one of those things is joining a club. Being in a dilemma about which club to join, Yui Hirasawa stumbles upon and applies for the Light Music Club, which she misinterprets to be about playing simple instruments, such as castanets. Unable to play an instrument, she decides to visit to apologize and quit. Meanwhile, the Light Music Club faces disbandment due to a lack of members. This causes the club members to offer anything, from food to slacking off during club time, in order to convince Yui to join. Despite their efforts, Yui insists on leaving due to her lack of musical experience. As a last resort, they play a piece for Yui, which sparks her fiery passion and finally convinces her to join the club. From then onward, it's just plain messing around with bits and pieces of practice. The members of the Light Music Club are ready to make their time together a delightful one!",
    },
    {
      'poster': 'assets/img/steins gate.jpg',
      'posterTitle': 'Steins Gate Poster',
      'title': 'Steins; Gate',
      'synopsis': "The self-proclaimed mad scientist Rintarou Okabe rents out a room in a rickety old building in Akihabara, where he indulges himself in his hobby of inventing prospective 'future gadgets' with fellow lab members: Mayuri Shiina, his air-headed childhood friend, and Hashida Itaru, a perverted hacker nicknamed 'Daru.' The three pass the time by tinkering with their most promising contraption yet, a machine dubbed the 'Phone Microwave,' which performs the strange function of morphing bananas into piles of green gel.Though miraculous in itself, the phenomenon doesn't provide anything concrete in Okabe's search for a scientific breakthrough; that is, until the lab members are spurred into action by a string of mysterious happenings before stumbling upon an unexpected success—the Phone Microwave can send emails to the past, altering the flow of history. Adapted from the critically acclaimed visual novel by 5pb. and Nitroplus, Steins;Gate takes Okabe through the depths of scientific theory and practicality. Forced across the diverging threads of past and present, Okabe must shoulder the burdens that come with holding the key to the realm of time.",
    },
  ]
  topAnimes = [
    {
      'poster': 'assets/img/full-metal.jpg',
      'posterTitle': 'Full Metal Poster',
      'title': 'Full Metal Alchemyst',
      'synopsis': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at",
    },
    {
      'poster': 'assets/img/gintama.jpg',
      'posterTitle': 'Gintama Poster',
      'title': 'Gintama',
      'synopsis': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at",
    },
    {
      'poster': 'assets/img/aot.jpg',
      'posterTitle': 'Attack on Titan Poster',
      'title': 'Attack on Titan',
      'synopsis': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum maximus mauris, a sollicitudin quam vulputate ac. Quisque sit amet velit at",
    },
  ]
  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}



