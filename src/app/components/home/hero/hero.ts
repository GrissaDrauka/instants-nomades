import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class Hero {
  heroBgUrl = 'assets/home.webp';
}
