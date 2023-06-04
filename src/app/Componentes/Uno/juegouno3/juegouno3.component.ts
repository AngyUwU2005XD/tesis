import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegouno3',
  templateUrl: './juegouno3.component.html',
  styleUrls: ['./juegouno3.component.css']
})
export class Juegouno3Component {
  constructor(private router: Router){}
  correcto: any;
  con:any=0;
  menu3uwu:any=0;
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
  menu5()
  {
    this.router.navigate(['menu']);
  }
  
  Juegouno2()
  {
     this.router.navigate(['Juegouno2']);
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
    this.con=localStorage.getItem('contador3uwu');
    this.menu3uwu=localStorage.getItem('menu3uwu');
    this.imagen1='../../../assets/res/mariposa.png'
    this.imagen2='../../../assets/pngs/ma/4.png'
    this.imagen3='../../../assets/pngs/ma/5.png'
    this.imagen4='../../../assets/pngs/ma/6.png'
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
      this.con++;
    }
    else
    {
      this.incorrecta=true;
    }
    localStorage.setItem('contadoruwuuno',this.con.toString());
  }

  cerrar()
  {
    this.correcta=false;
    this.incorrecta=false;
  }
  playSound() {
    const audio = new Audio();
    audio.src = '../../../../assets/Audios_completos/Número 1 /1 audio n3.aac';
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
