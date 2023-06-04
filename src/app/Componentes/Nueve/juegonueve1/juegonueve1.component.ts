import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegonueve1',
  templateUrl: './juegonueve1.component.html',
  styleUrls: ['./juegonueve1.component.css']
})
export class Juegonueve1Component {
  constructor(private router: Router){}
  correcto: any;
  num91:any=0;
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
  Juegodos2()
  {
     this.router.navigate(['Juegonueve2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegonueve1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
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
    this.imagen1='../../../assets/pngs/nu/9.png'
    this.imagen2='../../../assets/res/nube.png'
    this.imagen3='../../../assets/pngs/nu/3.png'
    this.imagen4='../../../assets/pngs/nu/2.png'
    this.menu3uwu=localStorage.getItem('menu3uwu');
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
      this.num91++;
    }
    else
    {
      this.incorrecta=true;
    }
    localStorage.setItem('num91',this.num91.toString());
  }

  cerrar()
  {
    this.correcta=false;
    this.incorrecta=false;
  }
  botonsonido() {
    const audio = new Audio();
    audio.src = '../../../../../assets/AudiosUwU/sonidoBoton.mp3';
    audio.load();
    audio.play();
  }
}
