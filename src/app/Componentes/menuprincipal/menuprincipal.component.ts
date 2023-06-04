import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent {
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
  menuuwu3:any=0;
  menu()
  {
     this.router.navigate(['menu']);
     this.menuuwu3=5;
     localStorage.setItem('menu3uwu',this.menuuwu3.toString());
  }
  menu3()
  {
     this.router.navigate(['menu3']);
     this.menuuwu3=3;
     localStorage.setItem('menu3uwu',this.menuuwu3.toString());
  }
  menu4()
  {
     this.router.navigate(['menu4']);
     this.menuuwu3=4;
     localStorage.setItem('menu3uwu',this.menuuwu3.toString());
  }
  menup()
  {
    this.router.navigate(['menup']);
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
// 
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
