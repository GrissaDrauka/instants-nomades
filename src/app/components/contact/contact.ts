import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { ContactInfos } from './contact-infos/contact-infos';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, ContactInfos],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
