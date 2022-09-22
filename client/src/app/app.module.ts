import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './articles/articles.component';
import { OrdersComponent } from './orders/orders.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    OrdersComponent,
    AddArticleComponent,
    EditOrdersComponent,
    AddOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
