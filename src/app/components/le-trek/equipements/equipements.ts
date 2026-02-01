import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-equipements',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './equipements.html',
  styleUrl: './equipements.scss'
})
export class Equipements implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Équipements & Conseils – Préparer son Trek | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Liste complète des équipements pour le trek : vêtements, trousse médicale, conseils pratiques. Tout ce qu\'il faut savoir avant de partir.' });
    this.updateCanonical('https://instants-nomades.fr/le-trek/equipements');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
