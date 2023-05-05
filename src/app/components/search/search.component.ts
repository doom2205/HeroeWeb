import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/interface/heroe.interface';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes:Heroe[]=[]
  term:string=""
  
  
  constructor(private _heroeSer: HeroesService,
              private _route:ActivatedRoute,
              private router:Router){
    
  }
  ngOnInit(): void {
    this._route.params.subscribe(r=>{
      this.term=r['term']
      this.heroes=this._heroeSer.BuscarHeroes(r['term'])
      console.log(this.heroes)
    })
  }
  GetHeroe(i:number){
    this.router.navigate(['/heroe',i]) 
  }

}
