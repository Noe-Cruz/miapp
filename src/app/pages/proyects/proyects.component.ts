import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { ProyectsService } from '../../services/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent implements OnInit{

  proyectos:Proyecto[] = [];
  proyecto = new Proyecto();
  
  
  constructor(private proyectoService:ProyectsService){}



  ngOnInit(): void{
    this.proyectoService.getProyectos().subscribe(data=>{
      this.proyectos = data.map(doc=>{
        return{
          ...doc.payload.doc.data()as Proyecto,
          id:doc.payload.doc.id
        };
      })
    });
    
  }
  
  submitForm() {
    if (this.proyecto.id) {
      this.updateProyecto();
    } else {
      this.insertarProyecto();
    }
  }


  //metodo para insertar un libro

  insertarProyecto(){
    this.proyectoService.createProyecto(this.proyecto);
    this.proyecto = new Proyecto();
  }

  //metodo para seleccionar un libro en la tabla
  
  selectProyecto(tareaSeleccionada:Proyecto){
    this.proyecto = tareaSeleccionada;
  }

  //metodo para actualizar libro

  updateProyecto(){
    this.proyectoService.updateProyecto(this.proyecto);
    this.proyecto = new Proyecto()
  }

  //meotodo para eliminar un libro

  deleteProyecto(id:string){
    this.proyectoService.delateProyecto(id);
    this.proyecto = new Proyecto();
  }
}

