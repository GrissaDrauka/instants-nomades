import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bon-a-savoir',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bon-a-savoir.html',
  styleUrl: './bon-a-savoir.scss'
})
export class BonASavoir { }
