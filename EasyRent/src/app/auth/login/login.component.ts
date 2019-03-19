import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitted: boolean = false;
  success: boolean = false;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private router: Router
    ) 
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6), Validators.max(16)]],
    })
  }

  ngOnInit() {
  }

  handleSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return; 
    }

    const prms =  this.data.login(this.loginForm)    
    prms.then(
      res => {
        if (res['ok']){
          this.success =  true;
          alert("Succesfully logged in")
          environment.user = res['obj']
          this.router.navigate(['/'])
        }
        else{
          alert("Credentials no correct")
          environment.user = res['obj']
          return
        }

      })
  }

}
