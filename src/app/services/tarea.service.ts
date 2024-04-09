import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Tarea } from '../models/tarea';



@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private firestore:AngularFirestore) { }

  //metodo que permite tener todos los documentos de la coleccion

  getTareas(){
    return this.firestore.collection('tareas').snapshotChanges();
  }

  //metodo para ainsertar un nuevo documento
  
  createTarea(tarea:Tarea){
    return this.firestore.collection('tareas').add(Object.assign({},tarea));
  }

  /// metodo para actualizar un documento

  updateTarea(tarea:Tarea){
    this.firestore.doc('tareas/'+tarea.id).update(tarea);
  }

  //metodo para eliminar un documento

  delateTarea(tareaId:string){
    this.firestore.doc('tareas/'+tareaId).delete();
  }
}
