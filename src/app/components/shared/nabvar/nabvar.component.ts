import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service';



@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {
  
  constructor(private _heroSer: HeroesService,
              private route:Router){

  }
  
  BuscarHeroe(t:string){
    console.log(t)
    this.route.navigate(['/search',t])

  }
}
