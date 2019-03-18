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

  login(data){
    let user = {
      email: data.controls.email.value,
      password: data.controls.password.value,
    };
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users')
        .subscribe(res => {
          if (this.userMatch(res, user)){
            console.log('yeeee')
            resolve(res);
          }
        }, (err) => {
          console.log("Noooo")
          reject(err);
        });
      });
  }

  userMatch(users, user){
    // console.log(users)
    let ok = false
    users.forEach(item => {
      if ((item.email == user.email) && (item.password == user.password)){
        ok = true
      }
    });
    return ok
  }
}
