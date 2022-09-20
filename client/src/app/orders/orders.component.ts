import { Component, OnInit } from '@angular/core';
import { Orders } from '../class/orders'
import { OrdersService } from '../service/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders!: Orders[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    
    this.getOrders();
    /*this.orders = [
      {
        "id":1,
        "reference":"AZPOUA90PC",
        "date":"1992-01-08",
        "articlelist":"AZERTY"
      },
      {
        "id":1,
        "reference":"MKHOUA9YGJ",
        "date":"1982-11-22",
        "articlelist":"QERTYU"
      }
    ];
    */
  }

  
  private getOrders(){
    this.ordersService.getOrdersList().subscribe(data =>{
      this.orders = data;
    });
  }


 

}
