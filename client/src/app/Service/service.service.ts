import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { 

  }
  getOrders(){
    return this.http.get<any>("http://localhost:8080/orders/");
  }

  postOrders(data : any){
    return this.http.post<any>("http://localhost:8080/orders/",data);
  }

  postArticle(data : any){
    return this.http.post<any>("http://localhost:8080/articles/",data);
  }

  getArticles(){
    return this.http.get<any>("http://localhost:8080/articles/");
  }
  


}
