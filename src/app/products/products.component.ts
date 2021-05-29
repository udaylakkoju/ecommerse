import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products = [];

    constructor(public shared: SharedService) { }
    ngOnInit() {
        this.shared.getProductsData().subscribe((data) => {
            this.products = Array.from(Object.keys(data), k => data[k]);
        });
    }

    selectedProduct(product) {
        this.shared.addOrder(product)
    }
}
