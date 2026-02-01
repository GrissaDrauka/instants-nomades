import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-le-voyage',
  imports: [RouterLink],
  templateUrl: './le-voyage.html',
  styleUrl: './le-voyage.scss'
})
export class LeVoyage implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Programme du Trek – 7 jours dans le désert | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Découvrez le programme jour par jour de notre trek dans le désert marocain : marche, bivouac, sophrologie et rencontres avec les nomades.' });
    this.updateCanonical('https://instants-nomades.fr/le-trek/programme');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
