import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlesComponent } from './articles/articles.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: 'articles', component:ArticlesComponent},
  {path:'', redirectTo: 'articles', pathMatch: 'full'},
  {path: 'orders', component:OrdersComponent},
  {path: 'articles/add', component:AddArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
