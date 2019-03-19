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
          let temp = this.userMatch(res, user)
          resolve(temp)
          // if (this.userMatch(res, user).ok){
          //   console.log('yeeee')
          //   // resolve(res);
          //   data = {
          //     status: true,
          //     obj: user
          //   }
          //   resolve(data)
          // }
          // data = {
          //   status: false,
          //   obj: null
          // }
          // resolve(data)
        }, (err) => {
          console.log("Noooo")
          reject(err);
        });
      });
  }

  userMatch(users, user){
    // console.log(users)
    let ok = false
    let obj = null;
    users.forEach(item => {
      if ((item.email == user.email) && (item.password == user.password)){
        ok = true
        obj = item
      }
    });
    return {ok, obj}
  }

  getCars(){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/cars')
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          console.log("Noooo")
          reject(err);
        });
      });
  }
}
