import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Validaciones para el nombre de usuario
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/), // Al menos una letra mayúscula
        Validators.pattern(/[a-z]/), // Al menos una letra minúscula
        Validators.pattern(/[0-9]/), // Al menos un número
        Validators.pattern(/[@$!%*?&]/) // Al menos un carácter especial
      ]],
    });
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica para manejar el envío del formulario
      console.log('Formulario enviado', this.loginForm.value);
    }
  }
}