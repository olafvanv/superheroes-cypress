import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes = [];
  search: string;

  constructor(
    private _heroes: HeroesService,
    private router: Router
  ) {
    this._heroes.getAllHeroes().subscribe((d: any[]) => {
      this.heroes = d.slice(0, 250);
    });
  }

  ngOnInit(): void {
  }

  openHero(id:string) {
    this.router.navigate(['/hero-details', id]);
  }
}
