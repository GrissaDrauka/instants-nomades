import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Programme } from '../programme/programme';
import { BonASavoir } from '../bon-a-savoir/bon-a-savoir';
import { Inclus } from '../inclus/inclus';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, Programme, BonASavoir, Inclus],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss'
})
export class Tabs {
  activeTab = signal<'programme' | 'bonasavoir' | 'inclus'>('programme');

  setTab(tab: 'programme' | 'bonasavoir' | 'inclus') {
    this.activeTab.set(tab);
  }

}
