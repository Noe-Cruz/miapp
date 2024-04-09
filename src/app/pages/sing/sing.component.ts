import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent {

  constructor(private authService: AuthService, private router: Router){

  }

  signUp(email: string, password: string){
    this.authService.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']);
        this.authService.logOut();
      })
      .catch((error) => {
        alert('Error al registrar usuario: ' + error.message);
      });
  }

}
