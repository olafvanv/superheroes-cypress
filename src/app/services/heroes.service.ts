import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private API_URL = 'https://akabab.github.io/superhero-api/api/';

  constructor(
    private http: HttpClient
  ) { }

  getAllHeroes(): Observable<any> {
    return this.http.get(`${this.API_URL}all.json`)
    // .pipe(delay(5000))
  }

  getHero(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}id/${id}.json`)
    // .pipe(delay(5000))
  }
}
