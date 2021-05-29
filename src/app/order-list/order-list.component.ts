import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any[] = [];
  subscription: Subscription;

  constructor(private sharedService: SharedService) {
    // subscribe to home component orders 
    this.subscription = this.sharedService.getData().subscribe(order => {
      if (order) {
        this.orders.push(order);
      } else {
        // clear orders when empty order received
        this.orders = [];
      }
    });
  }
  ngOnInit() { }

  clearOrders(): void {
    // clear orders
    this.sharedService.clearOrders();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
