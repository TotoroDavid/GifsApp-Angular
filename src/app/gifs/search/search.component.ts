import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>

  constructor(
    private gifsService: GifsService
  ) { }

  search() {
    /**
     * this is the event to get the value of our input and clear it!!
     */
    const value = this.txtSearch.nativeElement.value

    if (value.trim().length === 0) {
      return //do nothing 
    }

    this.gifsService.searchGifs(value)  //we save the history here, creating a new []

    this.txtSearch.nativeElement.value = ''

  }

}








/**
this is the other way to do 

html  --> (keyup)=search($event)
search(event: KeyboardEvent) {
    console.log(event.target);

  }

 */