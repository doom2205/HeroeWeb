import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService } from '../../servicios/heroes.service';


import { Heroe } from 'src/app/interface/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe:Heroe={
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  }
  constructor(private _router:ActivatedRoute,
              private _heroeServ:HeroesService){
    this._router.params.subscribe(p=>{
      this.heroe= this._heroeServ.GetHeroe(p['id'])
      console.log(this.heroe)
    })
  }



}
