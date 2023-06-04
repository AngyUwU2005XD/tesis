import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegodos2',
  templateUrl: './juegodos2.component.html',
  styleUrls: ['./juegodos2.component.css']
})
export class Juegodos2Component {
  constructor(private router: Router){}
  correcto: any;
  c2num: any=0;
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
     this.router.navigate(['Juegodos3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegodos1']);
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
       this.c2num=localStorage.getItem('contadoruwu');
        this.imagen1='../../../../assets/numeros_actu/ndos.png'
        this.imagen2='../../../../assets/numeros_actu/ncin.png'
        this.imagen3='../../../../assets/numeros_actu/nsiete.png'
        this.imagen4='../../../../assets/numeros_actu/nuno.png'
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
      this.c2num++;
    }
    else
    {
      this.incorrecta=true;
    }
    localStorage.setItem('contador2num2',this.c2num.toString());
  }

  cerrar()
  {
    this.correcta=false;
    this.incorrecta=false;
  }
  playSound() {
    const audio = new Audio();
    audio.src = '../../../../assets/Audios_completos/2 nivel 2.aac';
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
