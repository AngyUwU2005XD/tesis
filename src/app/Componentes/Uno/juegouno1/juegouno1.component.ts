import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegouno1',
  templateUrl: './juegouno1.component.html',
  styleUrls: ['./juegouno1.component.css']
})
export class Juegouno1Component {
  constructor(private router: Router){}
  correcto: any;
  contador:number=0;
  menu()
  {
    this.router.navigate(['menup']);
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
      this.imagen1='../../../assets/res/lapiz.png'
      this.imagen2='../../../assets/pngs/fl/2.png'
      this.imagen3='../../../assets/pngs/es/5.png'
      this.imagen4='../../../assets/pngs/ho/9.png'
      this.contador;
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
          this.contador=this.contador+1;
        }
        else
        {
          this.incorrecta=true;
        }
        localStorage.setItem('contadoruwu',this.contador.toString());
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

