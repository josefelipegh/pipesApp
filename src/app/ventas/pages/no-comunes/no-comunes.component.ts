import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Felipe';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ["Maria", "Juan", "Felipe", "Lucia"];
  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos dos cliente esperando',
    'other' : 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = "Lucia";
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre : 'Felipe',
    edad: 27,
    direccion: 'Montevideo Uruguay'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

}
