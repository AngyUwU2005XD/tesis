import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegocinco1',
  templateUrl: './juegocinco1.component.html',
  styleUrls: ['./juegocinco1.component.css']
})
export class Juegocinco1Component {
  constructor(private router: Router){}
  correcto: any;
  menu()
  {
     this.router.navigate(['menup']);
  }
  Juegodos2()
  {
     this.router.navigate(['Juegocinco2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegocinco1']);
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
    this.imagen1='../../../assets/pngs/ho/5.png'
    this.imagen2='../../../assets/pngs/nu/2.png'
    this.imagen3='../../../assets/pngs/es/8.png'
    this.imagen4='../../../assets/res/lobriz.png'
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
    }
    else
    {
      this.incorrecta=true;
    }
  }

  cerrar()
  {
    this.correcta=false;
    this.incorrecta=false;
  }

  botonsonido() {
    const audio = new Audio();
    audio.src = '../../../../assets/Audios_completos/Número 5/5 audio n2.aac';
    audio.load();
    audio.play();
  }
  botonerror() {
    const audio = new Audio();
    audio.src = '../../../../../assets/AudiosUwU/errorsonido.mp3';
    audio.load();
    audio.play();
  }
}
