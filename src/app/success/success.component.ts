import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  public user;
  public login: boolean;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      this.login = true;
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.login = false;
    }
  }

  gotologin() {
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
