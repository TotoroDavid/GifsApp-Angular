import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(
    private gifsService: GifsService
  ) { }

  get history() {
    return this.gifsService.history
  }

  search(term: string) {
    console.log(term)
    this.gifsService.searchGifs(term)

  }


}
