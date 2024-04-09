import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';


@Component({
  selector: 'app-tareasp',
  templateUrl:'./tareasp.component.html',
  styleUrl: './tareasp.component.css'
})


export class TareaspComponent implements OnInit{
  
  tareas:Tarea[] = [];
  tarea = new Tarea();
  
  
  constructor(private tareaService:TareaService){}



  ngOnInit(): void{
    this.tareaService.getTareas().subscribe(data=>{
      this.tareas = data.map(doc=>{
        return{
          ...doc.payload.doc.data()as Tarea,
          id:doc.payload.doc.id
        };
      })
    });
    
  }
  
  submitForm() {
    if (this.tarea.id) {
      this.updateTarea();
    } else {
      this.insertarTarea();
    }
  }


  //metodo para insertar un libro

  insertarTarea(){
    this.tareaService.createTarea(this.tarea);
    this.tarea = new Tarea();
  }

  //metodo para seleccionar un libro en la tabla
  
  selectTarea(tareaSeleccionada:Tarea){
    this.tarea = tareaSeleccionada;
  }

  //metodo para actualizar libro

  updateTarea(){
    this.tareaService.updateTarea(this.tarea);
    this.tarea = new Tarea()
  }

  //meotodo para eliminar un libro

  deleteTarea(id:string){
    this.tareaService.delateTarea(id);
    this.tarea = new Tarea();
  }
}
