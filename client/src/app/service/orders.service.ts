import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../class/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = "http://localhost:8080/orders";

  constructor(private httpclient: HttpClient) { }

  getOrdersList(): Observable<Orders[]>{
    return this.httpclient.get<Orders[]>('${this.baseUrl}');
  }
}
