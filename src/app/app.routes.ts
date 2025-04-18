import { Routes } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { PurchaseComponent } from '../components/purchase/purchase.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../services/auth.guard';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
