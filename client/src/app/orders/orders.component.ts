import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../class/orders'
import { OrdersService } from '../service/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders!: Orders[];

  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
    
    this.getOrders();
    
  }

  private getOrders(){
    this.ordersService.getOrdersList().subscribe(data =>{
      this.orders = data;
      console.log(this.orders.length);
    });
  }

  updateOrders(id: number){
    this.router.navigate(['edit-orders', id]);
  }
}
