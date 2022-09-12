import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  loading: boolean = false;

  constructor( private formBuilder: FormBuilder, private router: Router, private _authService: AuthService) {}

  
  
  
  ingresar(): void{
    

    const email = this.formGroup.get('email')?.value;
    const password = this.formGroup.get('password')?.value;

    if(this.formGroup.valid){
      
      this.spinnerloading();
      this._authService.obtenerToken(email, password).subscribe((data: any) => {
        localStorage.setItem("token", data.token);
        this._authService.iniciarSesion();
        // spinner hide
        this.router.navigate([""]);
      }, (err: any) => {
        // spinner hide
        this.loading = false;
        alert("error");
        this.formGroup.reset();
      })
    
    }else{
      alert("Alguna de las credenciales ingresadas no es válida");
      this.formGroup.reset();
      
    }


  }

  spinnerloading(): void{

    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(["dashboard"]);
    }, 2500);

    
  }


  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });

  }

}
