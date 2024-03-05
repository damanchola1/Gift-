import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('txtTag') tagInput !: ElementRef<HTMLInputElement>;

  constructor(private gifServices: GifsService) {

  }

  searchGif() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifServices.searhTag(newTag)
    this.tagInput.nativeElement.value = ''
  }

}
