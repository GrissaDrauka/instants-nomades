import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarifs.html',
  styleUrl: './tarifs.scss'
})
export class Tarifs implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Tarifs – 780€ Trek 7 jours tout compris | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Trek 7 jours / 6 nuits à 780€ tout compris : transport, hébergement, repas, activités bien-être. Acompte de 230€ à l\'inscription.' });
    this.updateCanonical('https://instants-nomades.fr/contact/tarifs');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
