import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-stores',
    templateUrl: './stores.component.html',
    styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

    public stores = [];
    public searchText: any = '';
    constructor(public shared: SharedService) { }

    ngOnInit(): void {
        this.shared.getStoresData().subscribe((data) => {
            this.stores = Array.from(Object.keys(data), k => data[k]);
        });
    }

    filterStore() {

    }

}
