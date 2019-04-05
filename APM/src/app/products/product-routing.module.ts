import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path:'products', component:ProductListComponent},
      { path:'products/:id', 
        component:ProductDetailComponent,
        canActivate:[ProductDetailGuard]
      }
    ]),
    CommonModule
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
