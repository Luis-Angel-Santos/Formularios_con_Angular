import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Angel',
    apellido: 'Santos',
    correo: 'angel@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
  guardar(forma: NgForm){
    console.log(forma.value)
  }

}
