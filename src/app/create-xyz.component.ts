import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-xyz',
  templateUrl: './create-xyz.component.html',
  styleUrls: ['./create-xyz.component.scss']
})
export class CreateXyzComponent implements OnInit {
  Registrationform:FormGroup;
  constructor() { }

  ngOnInit() {
    this.Registrationform = new FormGroup({
       UserName: new FormControl(),
       Email: new FormControl()
 
     })
   }
   onSubmit(): void {
     console.log(this.Registrationform.value)
     console.log(this.Registrationform.value)
     
 
     }

 }
 