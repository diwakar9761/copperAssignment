import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loginForm;
  public adminDetails;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.adminDetails = {
      username : 'mehtadiwakar40@gmail.com',
      password: 'Admin@123'
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(form) {
    console.log(form.value);
    if(form.value.username == this.adminDetails.username) {
      if(form.value.password == this.adminDetails.password) {
        alert('login successfully');
        localStorage.setItem('user', JSON.stringify(form.value))
        this.router.navigate(['/success']);
      } else {
        alert ('password is incorrent');
      }
    } else {
      alert ('Email / username is incorrent');
    }
  }

}
