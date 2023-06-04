import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  implements OnInit
{
  fecha!: Date;
  hora!: number;
  texto!: string;
  image!: String;
  image1!: String;
  ho: any=0;
  ngOnInit(): void {
    this.fecha = new Date();
    this.hora = this.fecha.getHours();
    this.mostrarSaludo();
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router){}
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
    //    this.image = "../../../assets/no ai/pi_2.png";
    //    this.ho=2;
    // }
    
    // else if (this.hora >= 18 && this.hora < 24) 
    // {
    //   this.image = "../../../assets/no ai/pi_3.png";
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
      this.image = "../../../assets/no ai/pi_3.png";
      this.ho=3;
    }

// -----------------------------------------------------------------------
  //   if (this.hora >= 18 && this.hora < 24) 
  // {
  //      this.image = "../../../assets/no ai/Principal_idea_copia.png";
  //      this.ho=1;

  //   }

  //   else if (this.hora >=12  && this.hora < 18) 
  //   {
  //      this.image = "../../../assets/no ai/pi_2.png";
  //      this.ho=2;
  //   }
    
  //   else if (this.hora >= 0 && this.hora < 12) 
  //   {
  //     this.image = "../../../assets/no ai/pi_3.png";
  //     this.ho=3;
  //   }
}
}