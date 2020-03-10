import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userProfileForm:FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {

     this.userProfileForm=new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      age:new FormControl('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      email:new FormControl('',[Validators.required,Validators.email])
    })
  }

  get f() { return this.userProfileForm.controls; }

onSubmit(){

console.log(this.userProfileForm);
this.router.navigate(['login']);
}
}
