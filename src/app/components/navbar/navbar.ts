import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMenuOpen = false;

  constructor(private eRef: ElementRef) { }

  // Fermer le menu si on clique ailleurs que dans la navbar
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.isMenuOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

}
