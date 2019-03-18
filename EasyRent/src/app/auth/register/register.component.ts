import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  submitted: boolean = false;
  success: boolean = false;

  radioValue: boolean = true

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private router: Router
    ) 
  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.min(6), Validators.max(16)]],
      phone: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  handleSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    const prms =  this.data.register(this.registerForm)    
    prms.then(
      res => {
        this.success =  true;
        this.router.navigate(['/'])
      })
  }

}
