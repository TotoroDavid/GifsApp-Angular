import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = `iqI1VXl24ihkHLvxA4kGnNY6dijIjjM1`
  private _history: string[] = []
  private serviceUrl = `https://api.giphy.com/v1/gifs`
  public resolve: Gif[] = []

  get history() {
    return [...this._history]
  }

  constructor(
    private http: HttpClient
  ) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.resolve = JSON.parse(localStorage.getItem('resolve')!) || []
  }

  /**
   *  if (localStorage.getItem('history')) {
      this._history = JSON.parse(localStorage.getItem('history')!)
    }  
   */



  searchGifs(query: string = '') {

    query = query.trim().toLowerCase()
    if (!this._history.includes(query)) {
      this._history.unshift(query)  // add the new array with the long it has.
      this._history = this._history.slice(0, 5)

      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query)

    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data)
        this.resolve = resp.data

        localStorage.setItem('results', JSON.stringify(this.resolve))
      })
  }

}


























// unshift() El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

/**
 * 
 * 
or 
    const resp = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=iqI1VXl24ihkHLvxA4kGnNY6dijIjjM1')
    const data = await resp.json()
    console.log(data)
  }


fetch('https://api.giphy.com/v1/gifs/trending?api_key=iqI1VXl24ihkHLvxA4kGnNY6dijIjjM1')
      .then(resp => {
        resp.json().then(data => console.log(data)
        )
      })


 */