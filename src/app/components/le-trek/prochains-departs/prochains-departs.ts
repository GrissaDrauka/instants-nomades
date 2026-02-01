import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prochains-departs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './prochains-departs.html',
  styleUrl: './prochains-departs.scss'
})
export class ProchainsDeparts implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Prochains Départs 2026 & 2027 – Trek Désert Maroc | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Réservez votre trek dans le désert marocain : départs en avril et octobre 2026, février et avril 2027. 780€/personne, groupe de 8 max.' });
    this.updateCanonical('https://instants-nomades.fr/le-trek/prochains-departs');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
