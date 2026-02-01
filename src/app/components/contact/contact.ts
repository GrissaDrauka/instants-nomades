import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Contact – Réserver votre Trek | Instants Nomades');
    this.meta.updateTag({ name: 'description', content: 'Contactez Michel pour réserver votre trek dans le désert marocain ou poser vos questions. Réponse rapide garantie.' });
    this.updateCanonical('https://instants-nomades.fr/contact');
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
