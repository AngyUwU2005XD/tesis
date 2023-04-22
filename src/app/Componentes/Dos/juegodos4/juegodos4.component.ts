import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegodos4',
  templateUrl: './juegodos4.component.html',
  styleUrls: ['./juegodos4.component.css']
})
export class Juegodos4Component {
  constructor(private router: Router){}
  correcto: any;

  menu()
  {
    this.router.navigate(['menup']);
  }
  Juegodos2()
  {
     this.router.navigate(['Juegodos2']);
    }
    Juegodos3()
    {
      this.router.navigate(['Juegodos3']);
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
        this.imagen1='../../../assets/pngs/fl/2.png'
        this.imagen2='../../../assets/pngs/lom/4.png'
        this.imagen3='../../../assets/pngs/nu/9.png'
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
  playSound() {
    const audio = new Audio();
    audio.src = '../../../../assets/Audios/1 audio.mp3';
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
