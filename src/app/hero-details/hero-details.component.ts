import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  sub: Subscription;
  hero: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private _heroes: HeroesService
  ) {
    this.sub = this.route.params.subscribe(p => {
      this._heroes.getHero(p['id']).subscribe(d => {
        console.log(d);

        this.hero = d;
        this.loading = false;
      })
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
