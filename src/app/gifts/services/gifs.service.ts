import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []
  private _tagsHistory: string[] = []
  private apiKey = '87V0Unob6aIdTneHd8og92esz28awsH0'

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  searhTag(name: string) {

    if (name != '') {
      this.organiceHistory(name)
    }

    this.http.get<SearchResponse>(`https://api.giphy.com/v1/gifs/search?api_key=87V0Unob6aIdTneHd8og92esz28awsH0&q=${name}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)
      .subscribe(response => {
        this.gifList = response.data
      }
      )

  }

  private organiceHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 10)
    this.saveLocalStorage()
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searhTag(this._tagsHistory[0]);
  }


}
