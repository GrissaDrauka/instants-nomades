import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Tabs } from './tabs/tabs';

@Component({
  selector: 'app-home',
  imports: [Hero, Tabs],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
