import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menujuegos',
  templateUrl: './menujuegos.component.html',
  styleUrls: ['./menujuegos.component.css']
})
export class MenujuegosComponent 
{
  constructor(private router: Router){}
  Juego1()
  {
     this.router.navigate(['Juegouno1']);
  }
  Juego2()
  {
     this.router.navigate(['Juegodos4']);
  }
  Juego3()
  {
     this.router.navigate(['Juegotres1']);
  }
  Juego4()
  {
     this.router.navigate(['Juegocuatro1']);
  }
  Juego5()
  {
     this.router.navigate(['Juegocinco1']);
  }
  Juego6()
  {
     this.router.navigate(['Juegoseis1']);
  }
  Juego7()
  {
     this.router.navigate(['Juegosiete1']);
  }
  Juego8()
  {
     this.router.navigate(['Juegoocho1']);
  }
  Juego9()
  {
     this.router.navigate(['Juegonueve1']);
  }

  botonsonido() {
   const audio = new Audio();
   audio.src = '../../../../../assets/AudiosUwU/sonidoBoton.mp3';
   audio.load();
   audio.play();
 }
}
