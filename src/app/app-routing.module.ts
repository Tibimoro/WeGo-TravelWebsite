import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CartComponent } from './pages/shop/cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Book', component: BookComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
