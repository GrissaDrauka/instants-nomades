import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activites',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './activites.html',
  styleUrl: './activites.scss'
})
export class Activites implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Activités du Trek – Sophrologie, Pilates & Bien-être | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Sophrologie, Pilates, stretching, méditation et transe hypnotique : découvrez les activités bien-être proposées pendant le trek dans le désert.' });
    this.updateCanonical('https://instants-nomades.fr/le-trek/activites');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
