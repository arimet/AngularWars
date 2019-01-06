import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angularWars';

  events: string[] = [];
  opened: boolean = true;

  paths: object[] = [
    { name: 'Accueil', path: '/home' },
    { name: 'Films', path: '/movies' },
    { name: 'Personnages', path: '/personnages' }
  ]
}
