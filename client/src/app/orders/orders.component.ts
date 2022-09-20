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
  }

  private getOrders(){
    this.ordersService.getOrdersList().subscribe(data =>{
      this.orders = data;
    });
  }

 

}
