import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegotres1',
  templateUrl: './juegotres1.component.html',
  styleUrls: ['./juegotres1.component.css']
})
export class Juegotres1Component {
  constructor(private router: Router){}
  correcto: any;
  
  menu()
  {
     this.router.navigate(['menup']);
  }
  Juegodos2()
  {
     this.router.navigate(['Juegotres2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegotres1']);
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
        this.imagen1='../../../assets/pngs/es/3.png'
        this.imagen2='../../../assets/res/lapiz.png'
        this.imagen3='../../../assets/pngs/nu/9.png'
        this.imagen4='../../../assets/pngs/fl/5.png'
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
        audio.src = '../../../../../assets/AudiosUwU/sonidoBoton.mp3';
        audio.load();
        audio.play();
      }
}
