import { Component } from '@angular/core';
import { GifsService } from '../../../gifts/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private giftService: GifsService) {

  }

  get tags() {
    return this.giftService.tagsHistory
  }

  searchTag(tag: string) {
    this.giftService.searhTag(tag)
  }


}
