import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  loading: boolean = false;

  constructor( private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ingresar(): void{
    
    //console.log(this.formGroup);

    const email = this.formGroup.value.email;
    const password = this.formGroup.value.password;

    // fake credentials

    const fakeEmail = "alkemy@alkemy.com";
    const fakePass = "react";

    // validación


    if(fakeEmail === email && fakePass === password){
      
      this.fakeLoading();
      
    }else{

      alert("Alguna de las credenciales ingresadas no es válida");
      this.formGroup.reset();
    }
  }

  fakeLoading(): void{

    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 2500);
  }



  ngOnInit(): void {
  }

}
