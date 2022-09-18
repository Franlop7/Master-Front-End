import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User;

  constructor(private auth: AuthService) { 
    this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

}
