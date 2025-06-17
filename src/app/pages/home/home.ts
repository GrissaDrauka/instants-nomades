import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Tabs } from './tabs/tabs';
import { Programme } from './programme/programme';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, Tabs, Programme, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
