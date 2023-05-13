import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import * as Aos from 'aos';
import { AccountComponent } from './pages/account/account.component';
import { ComingsoonComponent } from './sharepage/comingsoon/comingsoon.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environments } from '../environments/environments';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsHeaderComponent } from './pages/shop/products-header/products-header.component';
import { ProductBoxComponent } from './pages/shop/product-box/product-box.component';
import { CartComponent } from './pages/shop/cart/cart.component';
import { ShopHeaderComponent } from './pages/shop/shop-header/shop-header.component';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BookComponent,
    AccountComponent,
    ComingsoonComponent,
    ShopComponent,
    BlogsComponent,
    ProductsHeaderComponent,
    ProductBoxComponent,
    CartComponent,
    ShopHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    Aos.init();
  }
}
