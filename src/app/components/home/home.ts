import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from './hero/hero';
import { Tabs } from './tabs/tabs';

@Component({
  selector: 'app-home',
  imports: [Hero, Tabs, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
