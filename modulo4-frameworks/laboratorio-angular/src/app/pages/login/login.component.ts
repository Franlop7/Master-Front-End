import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  loading: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private auth: AuthService,
  ) { 
    this.initForm();
  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  login() {
    const { username,password } = this.loginForm.value;
    if (!username || !password) {
      return;
    }

    this.loading = true;
    this.auth.login(username,password).subscribe((res) => {
      this.loading = false;
      if (res) {
        this.router.navigate(['/dashboard']);
      }else {
        this.snackBar.open('El usuario o contraseña son incorrecta\n Introduce: master@lemoncode.net/12345678', 'cerar', { duration: 7000 });
      }
    });
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
