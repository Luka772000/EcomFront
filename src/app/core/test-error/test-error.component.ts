import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent {
  validationErrors: any;
  constructor(private httpClient:HttpClient) { }
  ngOnInit(){};
  get404Error(){
    this.httpClient.get('https://localhost:7157/api/products/42').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  get400Error(){
    this.httpClient.get('https://localhost:7157/api/buggy/badrequest').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  get500Error(){
    this.httpClient.get('https://localhost:7157/api/buggy/servererror').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  get401Error(){
    this.httpClient.get('https://localhost:7157/api/buggy/auth').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  get400ValidationError(){
    this.httpClient.get('https://localhost:7157/api/products/fortytwo').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error.errors;
    })
  }



}
