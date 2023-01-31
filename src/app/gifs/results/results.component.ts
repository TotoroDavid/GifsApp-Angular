import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interface/gifs.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  get results(): Gif[] {
    return this.gifsServices.resolve
  }

  constructor(
    private gifsServices: GifsService
  ) { }

}
