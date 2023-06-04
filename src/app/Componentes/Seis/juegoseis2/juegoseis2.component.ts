import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoseis2',
  templateUrl: './juegoseis2.component.html',
  styleUrls: ['./juegoseis2.component.css']
})
export class Juegoseis2Component {
  constructor(private router: Router){}
  correcto: any;
  num62: any=0;
  menu3uwu:any=0;
  menu()
  {
     this.router.navigate(['menup']);
  }
  menu3()
  {
    this.router.navigate(['menu3']);
  }
  menu4()
  {
    this.router.navigate(['menu4']);
  }
  menu5()
  {
    this.router.navigate(['menu']);
  }
  Juegouno3()
  {
     this.router.navigate(['Juegoseis3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegoseis1']);
  }

  imagen1!: string;
      imagen2!: string;
      imagen3!: string;
      imagen4!: string;
      arreglo!:Array<{url: string, respuesta: boolean}>
      correcta= false;
      incorrecta= false;
      ngOnInit(): void 
      {
        this.imagen1='../../../../assets/numeros_actu/nseis.png'
        this.imagen2='../../../../assets/numeros_actu/nuno.png'
        this.imagen3='../../../../assets/numeros_actu/ncin.png'
        this.imagen4='../../../../assets/numeros_actu/nsiete.png'
        this.menu3uwu=localStorage.getItem('menu3uwu');
        this.num62=localStorage.getItem('num61');
        this.arreglo =
        [
          {
            url: this.imagen1, 
            respuesta: true
          },
          {
            url: this.imagen2, 
            respuesta: false
          },
          {
            url: this.imagen3, 
            respuesta: false
          },
          {
            url: this.imagen4, 
            respuesta: false
          }
        ];
        console.log(this.arreglo[0].url)
        this.arreglo= this.mezclar(this.arreglo);
      }
    
      mezclar(array: any)
      {
        for(let i=array.length-1; i>0; i--)
        {
          const j = Math.floor(Math.random()*(i+1));
          [array[i],[array[j]]]=[array[j],[array[i]]];
        }
        return array;
      }
      verificar(respuesta: boolean)
      {
        if (respuesta)
        {
          this.correcta=true;
          console.log(this.correcta);
          this.num62++;
        }
        else
        {
          this.incorrecta=true;
        }
        localStorage.setItem('num62',this.num62.toString());
      }
    
      cerrar()
      {
        this.correcta=false;
        this.incorrecta=false;
      }

      playSound() {
    const audio = new Audio();
    audio.src = '../../../../assets/Audios_completos/Número 6/6 audio n2.aac';
    audio.load();
    audio.play();
  }
  botonsonido() {
    const audio = new Audio();
    audio.src = '../../../../../assets/AudiosUwU/sonidoBoton.mp3';
    audio.load();
    audio.play();
  }
}
