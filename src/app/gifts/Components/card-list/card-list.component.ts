import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gifs.interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input() gifs: Gif[] = []
  public hasLoad = false


  onLoad() {
    this.hasLoad = true
  }

} 
