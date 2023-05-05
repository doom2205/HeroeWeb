import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from '../../interface/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[]
  constructor(private _heroesService : HeroesService,
              private router:Router){

  }
  ngOnInit() {
     this.heroes=this._heroesService.GetHeroes()
     console.log(this.heroes)
  }
  GetHeroe(i:number){
      
      this.router.navigate(['/heroe',i]) 
  }

}
