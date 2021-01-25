import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
    })

export class AppComponent implements OnInit {
    registerForm: FormGroup;
    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    
     get f() { return this.registerForm.controls; }

     onSubmit(): void{
      console.log(this.registerForm.value)
     {
       {
         console.log(this.loginForm.value)
       
         this.submitted = true;
 
        
         if (this.registerForm.invalid) {
             return;
         }
         
 
         alert('REGISTER SUCCESSFULY!! :-)')
         alert('LOGIN SUCCESSFULY!! :-)')
     }
    }
  }
}