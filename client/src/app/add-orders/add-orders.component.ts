import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../class/orders';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent implements OnInit {

  orderss: Orders = new Orders();

  constructor(private ordersService:OrdersService, private router:Router) { }

  ngOnInit(): void {
  }

  saveOrders(){
    this.ordersService.createOrders(this.orderss).subscribe(data=>{
      this.goToOrdersList();
    },
    error => console.log(error)
    );
  }

  goToOrdersList(){
    this.router.navigate(['/orders']);
  }

  onSubmit(){
    this.saveOrders();
  }
}
