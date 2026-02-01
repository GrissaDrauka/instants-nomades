import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Hero } from './hero/hero';
import { Tabs } from './tabs/tabs';

@Component({
  selector: 'app-home',
  imports: [Hero, Tabs, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Instants Nomades – Trek désert Maroc & séjours de reconnexion');
    this.meta.updateTag({ name: 'description', content: 'Vivez un trek de 7 jours dans le désert marocain avec sophrologie, Pilates et immersion culturelle. Reconnexion à soi au cœur du Sahara.' });
    this.updateCanonical('https://instants-nomades.fr/');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
