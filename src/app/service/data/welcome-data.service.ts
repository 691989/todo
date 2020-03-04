import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {

  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("execute Hello World Bean Service")
  }

      //http://localhost:8080/hello-world/path-variable/dhananjay
  executeHelloWorldBeanServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`
    http://localhost:8080/hello-world/path-variable/${name}`
    //{headers}
    );
    
  }
 

  //:4200/list:1 Access to XMLHttpRequest at 'http://localhost:8080/users/'dhananjay'/todos' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
  // header is present on the requested resource.

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'dhananjay'
  //   let password = 'dhananjay'
  //   let basicAuthHeaderString = 'Basic' + username + ':' + password;//btoa = is windowbase64 this does an encoding of username and password in js 
  //   return basicAuthHeaderString;
  // }

}