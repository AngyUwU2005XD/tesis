import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component {
   fecha!: Date;
   hora!: number;
   texto!: string;
   image!: String;
   image1!: String;
   contotal:any=0;
   uno:any=0;
   dos:any=0;
   tres:any=0;
   ho:any=0;
   
  constructor(private router: Router){}
  muenu3uwu:any;
  menu()
  {
    this.router.navigate(['menup']);
  }
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
  ngOnInit(): void 
  {
   this.fecha = new Date();
   this.hora = this.fecha.getHours();
   this.mostrarSaludo();
    this.muenu3uwu;
    localStorage.setItem('menuuwu3',this.muenu3uwu.toString());
    this.uno=localStorage.getItem('uno');
  }

  botonsonido() {
   const audio = new Audio();
   audio.src = '../../../../../assets/AudiosUwU/sonidoBoton.mp3';
   audio.load();
   audio.play();
 }
 mostrarSaludo() 
 {
 // -----------------------------------------------------------------------
   //  if (this.hora >= 12 && this.hora < 18) 
   //  {
   //     this.image = "../../../assets/no ai/Principal_idea_copia.png";
   //     this.ho=1;

   //  }

   //  else if (this.hora >= 0 && this.hora < 12) 
   //  {
   //     this.image = "../../../assets/no ai/pi_2.png";
   //     this.ho=2;
   //  }
    
   //  else if (this.hora >= 18 && this.hora < 24) 
   //  {
   //    this.image = "../../../assets/no ai/pi_3.png";
   //    this.ho=3;
   //  }
// ----------------------------------------------------------------------
if (this.hora >= 0 && this.hora < 12) 
{
   this.image = "../../../assets/no ai/Principal_idea_copia.png";
   this.ho=1;

}

else if (this.hora >= 12 && this.hora < 18) 
{
   this.image = "../../../assets/no ai/pi_2.png";
   this.ho=2;
}

else if (this.hora >= 18 && this.hora < 24) 
{
  this.image = "../../../assets/no ai/pi_3.png";
  this.ho=3;
}

// -----------------------------------------------------------------------
// if (this.hora >= 0 && this.hora < 12) 
// {
//    this.image = "../../../assets/no ai/Principal_idea_copia.png";
//    this.ho=1;

// }

// else if (this.hora >= 18 && this.hora < 24) 
// {
//    this.image = "../../../assets/no ai/pi_2.png";
//    this.ho=2;
// }

// else if (this.hora >= 12 && this.hora < 18) 
// {
//   this.image = "../../../assets/no ai/pi_3.png";
//   this.ho=3;
// }
}
}
