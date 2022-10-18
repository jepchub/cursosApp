import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoEntradas: any[];
  constructor(private entradaService: EntradaService) {
    // this.listadoEntradas = [
    //   {
    //     titulo: 'Introduccion a Angular',
    //     resumen: 'En esta leccion realizaremos una pequeña introduccion'
    //   },
    //   {
    //     titulo: 'Typescript como lenguaje para Angular',
    //     resumen: 'Breve recoorrido por el lenguaje de typescript con base para desarrollo con angular'
    //   },
    //   {
    //     titulo: 'Componentes en Angular',
    //     resumen: 'Aprenderemos a usar los componentes en angular y el porque de su importancia '
    //   }
    // ];
  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }
  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${titulo}.`);
  }

}
