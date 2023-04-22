import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent {
  constructor(private router: Router){}
  menu()
  {
     this.router.navigate(['menu']);
  }
  menu3()
  {
     this.router.navigate(['menu3']);
  }
  menu4()
  {
     this.router.navigate(['menu4']);
  }

  botonsonido() {
   const audio = new Audio();
   audio.src = '../../../../../assets/AudiosUwU/sonidoBoton.mp3';
   audio.load();
   audio.play();
 }
}
