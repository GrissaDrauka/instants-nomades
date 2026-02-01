import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mentions-legales',
  imports: [],
  templateUrl: './mentions-legales.html',
  styleUrl: './mentions-legales.scss'
})
export class MentionsLegales implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Mentions Légales | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Mentions légales du site Instants Nomades : informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.' });
    this.updateCanonical('https://instants-nomades.fr/mentions-legales');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
