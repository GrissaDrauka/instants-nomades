import { Component, input, signal, computed } from '@angular/core';
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
  previousTab = signal<'programme' | 'bonasavoir' | 'inclus'>('programme');

  // Calcule l’index pour détecter la direction
  private readonly tabOrder: Record<string, number> = {
    programme: 0,
    bonasavoir: 1,
    inclus: 2,
  };

  animationDirection = computed(() => {
    const current = this.activeTab();
    const previous = this.previousTab();
    return this.tabOrder[current] > this.tabOrder[previous] ? 'forward' : 'backward';
  });

  setTab(tab: 'programme' | 'bonasavoir' | 'inclus') {
    if (tab !== this.activeTab()) {
      this.previousTab.set(this.activeTab());
      this.activeTab.set(tab);
    }

  }
}
