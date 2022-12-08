import { IProduct } from './models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products:IProduct[] = [];
  constructor(private http: HttpClient) { }
  title = 'client';
  ngOnInit():void{
    this.http.get('https://localhost:7157/api/products?pageSize=50').subscribe((response:any) => {
      this.products = response.data
      console.log(response);
      console.log(this.products)
    }, error => {
      console.log(error);
    })
  }
}
