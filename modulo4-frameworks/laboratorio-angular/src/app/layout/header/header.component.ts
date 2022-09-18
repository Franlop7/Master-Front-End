import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isLogged: boolean = false;
  username: string = '';

  constructor(private router: Router, private auth: AuthService) {
    this.auth.user.subscribe((user) => {
      this.isLogged = !!user.username && !! user.password;
      this.username = this.isLogged ? user.username: '';
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
