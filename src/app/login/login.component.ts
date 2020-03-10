import { Component, OnInit, Output } from '@angular/core';
import {FormGroup,FormControl, Validators}  from '@angular/forms';
import {Router} from '@angular/router'
import { HomeService } from '../home.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

 
  constructor(private router:Router,private homeService:HomeService) { }
  ngOnInit() {

   this.loginForm=new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(1)]),

  })
  }


  onSubmit(){
   localStorage.setItem("userId",this.loginForm.get('email').value);
    this.router.navigate(['home'],this.loginForm.get('email').value);
  }
}
