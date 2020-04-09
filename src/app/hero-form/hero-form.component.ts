import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really smart', 'Super flexible', 'Super hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  
  onSubmit() { 
    console.log(this.model);
    this.submitted = true;
    }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model) }

  constructor() { }

  ngOnInit(): void {
  }

  newHero() {
    this.model = new Hero(42, '' , '');
  }

}
