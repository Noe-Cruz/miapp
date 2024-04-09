import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat' 
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment } from '../environments/environment.development';
import { TareaspComponent } from './pages/tareasp/tareasp.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    TareaspComponent,
    NvarComponent,
    LoginComponent,
    SingComponent,
    DashbordComponent,
    ProyectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp({"projectId":"gestortp-42181","appId":"1:967993018461:web:2ea0b2e0c32b15a186a5b4","storageBucket":"gestortp-42181.appspot.com","apiKey":"AIzaSyC42nPnR1rzFLjykqpxFovb5UTWzC6KNiY","authDomain":"gestortp-42181.firebaseapp.com","messagingSenderId":"967993018461"})),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }import { FormsModule } from '@angular/forms';
import { NvarComponent } from './pages/nvar/nvar.component';
import { LoginComponent } from './pages/login/login.component';
import { SingComponent } from './pages/sing/sing.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';

