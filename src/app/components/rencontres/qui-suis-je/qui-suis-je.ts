import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-qui-suis-je',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './qui-suis-je.html',
  styleUrl: './qui-suis-je.scss'
})
export class QuiSuisJe implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Michel Picas – Sophrologue & Accompagnateur | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Découvrez Michel Picas : sophrologue, hypnothérapeute et professeur de Pilates. 22 ans d\'expérience au service de votre bien-être dans le désert.' });
    this.updateCanonical('https://instants-nomades.fr/qui-suis-je');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
