import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { NavbarComponent } from './navbar/navbar.component'
import { StoresComponent } from './stores/stores.component';
import { OrderListComponent} from './order-list/order-list.component';


const routes: Routes = [
{
  path:'',
  component:ProductsComponent
},
{
  path:'navbar',
  component:NavbarComponent
},
{
  path:'store',
  component:StoresComponent
},
{
  path:'orders',
  component:OrderListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
