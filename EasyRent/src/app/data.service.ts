import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  register(data){
    let user = {
      firstName: data.controls.firstName.value,
      lastName: data.controls.lastName.value,
      email: data.controls.email.value,
      gender: data.controls.gender.value,
      password: data.controls.password.value,
    };
    // this.http.post('http://localhost:3000/users', JSON.stringify(user))
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users', user)
        .subscribe(res => {
          console.log('yeeee')
          resolve(res);
          return "asdf"
        }, (err) => {
          console.log("Noooo")
          reject(err);
        });
      });
  }
}
