import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menujuegos',
  templateUrl: './menujuegos.component.html',
  styleUrls: ['./menujuegos.component.css']
})
export class MenujuegosComponent 
{
   fecha!: Date;
   hora!: number;
   texto!: string;
   image!: String;
   image1!: String;
   ho:any=0;

   ngOnInit(): void {
      this.fecha = new Date();
      this.hora = this.fecha.getHours();
      this.mostrarSaludo();
    }
  constructor(private router: Router){}
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
 mostrarSaludo() 
 {
   // -----------------------------------------------------------------------
    // if (this.hora >= 12 && this.hora < 18) 
    // {
    //    this.image = "../../../assets/no ai/Principal_idea_copia.png";
    //    this.ho=1;

    // }

    // else if (this.hora >= 0 && this.hora < 12) 
    // {
    //    this.image = "../../../assets/no ai/Principal idea_2.png";
    //    this.ho=2;
    // }
    
    // else if (this.hora >= 18 && this.hora < 24) 
    // {
    //   this.image = "../../../assets/no ai/Principal idea_3.png";
    //   this.ho=3;
    // }
// -----------------------------------------------------------------------
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
  this.image = "../../../assets/no ai/Principal idea_3.png";
  this.ho=3;
}

// -----------------------------------------------------------------------
// if (this.hora >= 18 && this.hora < 24)
// {

//    this.image = "../../../assets/no ai/Principal_idea_copia.png";
//    this.ho=1;

// }

// else if (this.hora >=0  && this.hora < 12) 
// {
//    this.image = "../../../assets/no ai/Principal idea_2.png";
//    this.ho=2;
// }

// else if (this.hora >= 12 && this.hora < 18) 
// {
//   this.image = "../../../assets/no ai/Principal idea_3.png";
//   this.ho=3;
// }
 }
}
