import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-equipements',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './equipements.html',
  styleUrl: './equipements.scss'
})
export class Equipements { }
