import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ArticlesComponent } from './articles/articles.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: 'articles', component:ArticlesComponent},
  {path: '', redirectTo: 'articles', pathMatch: 'full'},
  {path: 'orders', component:OrdersComponent},
  {path: 'articles/add', component:AddArticleComponent},
  {path: 'edit-orders/:id', component:EditOrdersComponent},
  {path: 'orders/add', component:AddOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
