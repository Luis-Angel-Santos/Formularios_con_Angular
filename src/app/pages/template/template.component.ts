import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'angel',
    apellido: 'santos',
    correo: 'angel@gmail.com',
    pais: '',
    genero: 'M'

  }

  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
    .subscribe(paises => {
        this.paises = paises;

        this.paises.unshift({
          nombre: 'Seleccione un país',
          codigo: ''
        })
    });
  }


  // tslint:disable-next-line: typedef
  guardar(forma: NgForm){
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    console.log(forma.value)

  }

}
