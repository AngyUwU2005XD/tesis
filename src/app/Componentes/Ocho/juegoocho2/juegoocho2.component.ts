import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoocho2',
  templateUrl: './juegoocho2.component.html',
  styleUrls: ['./juegoocho2.component.css']
})
export class Juegoocho2Component {
  constructor(private router: Router){}
  correcto: any;

  menu()
  {
     this.router.navigate(['menup']);
  }
  Juegouno3()
  {
     this.router.navigate(['Juegoocho3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegoocho1']);
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
        this.imagen1='../../../../assets/numeros_actu/nocho.png'
        this.imagen2='../../../../assets/numeros_actu/ndos.png'
        this.imagen3='../../../../assets/numeros_actu/ntres.png'
        this.imagen4='../../../../assets/numeros_actu/ncua.png'
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
    audio.src = '../../../../assets/Audios_completos/Número 8/8 audio n2.aac';
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
