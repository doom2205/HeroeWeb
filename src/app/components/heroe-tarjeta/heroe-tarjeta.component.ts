import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/interface/heroe.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  @Output() heroeSelect:EventEmitter<number>
  @Input() index:number|undefined;
  @Input() h:Heroe={
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: '',
    idx: 0
  }
  
constructor(private router:Router){
  this.heroeSelect= new EventEmitter()
}

  GetHeroe(){
    // console.log(this.index)
    this.router.navigate(['/heroe',this.h.idx])
    // this.heroeSelect.emit(this.index)
  }
}
