import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})

export class ProyectsService {


    constructor(private firestore:AngularFirestore) { }
  
    //metodo que permite tener todos los documentos de la coleccion
  
    getProyectos(){
      return this.firestore.collection('proyectos').snapshotChanges();
    }
  
    //metodo para ainsertar un nuevo documento
    
    createProyecto(proyecto:Proyecto){
      return this.firestore.collection('proyectos').add(Object.assign({},proyecto));
    }
  
    /// metodo para actualizar un documento
  
    updateProyecto(proyecto:Proyecto){
      this.firestore.doc('proyectos/'+proyecto.id).update(proyecto);
    }
  
    //metodo para eliminar un documento
  
    delateProyecto(proyectoId:string){
      this.firestore.doc('proyectos/'+proyectoId).delete();
    }
  }
  