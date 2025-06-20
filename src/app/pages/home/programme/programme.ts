import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-programme',
  imports: [],
  standalone: true,
  templateUrl: './programme.html',
  animations: [
    trigger('expandCollapse', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '0px', opacity: 0 })),
      transition('closed <=> open', [animate('1s ease-in-out')])
    ])
  ],
  styleUrl: './programme.scss'
})
export class Programme {

  showFullText = false;
  showAllDetails = false;


  expandedHeight = 0;
  @ViewChild('expandingBlock', { static: false }) expandingBlockRef!: any;


  toggleFullText() {
    this.showFullText = !this.showFullText;
  }

  toggleAllDetails() {
    this.showAllDetails = !this.showAllDetails;
  }
}
