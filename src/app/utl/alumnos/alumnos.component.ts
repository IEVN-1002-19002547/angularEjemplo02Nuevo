import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:Boolean=true;
  listFilter:string='';
  alumnoTitle!:string;
  dataSource:any=[]

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
  alumnoIevn:AlumnosUtl[]=[
    {
      "matricula": 1,
      "nombre": "Jose Francisco",
      "apaterno": "Guerrero",
      "amaterno": "Ontiveros",
      "correo": "19002547@alumnos.utleon.edu.mx"
    },
    {
      "matricula": 2,
      "nombre": "Karla Paulina",
      "apaterno": "Rocha",
      "amaterno": "Orozco",
      "correo": "20001044@alumnos.utleon.edu.mx"
    },
    {
      "matricula": 3,
      "nombre": "Diego Miguel",
      "apaterno": "Ramirez",
      "amaterno": "Oliva",
      "correo": "21001026@alumnos.utleon.edu.mx",
    }
  ]

  ngOnInit(): void{
    this.dataSource=this.alumnoIevn;
  }

}
