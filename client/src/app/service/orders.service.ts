import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../class/orders';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  private baseUrl = "http://localhost:8080/orders";

  constructor(private httpClient: HttpClient) { }

  createOrders(orders: Orders): Observable<Object>{
    return this.httpClient.post(this.baseUrl, orders);
  }

  getOrdersList(): Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(this.baseUrl);
  }
}
