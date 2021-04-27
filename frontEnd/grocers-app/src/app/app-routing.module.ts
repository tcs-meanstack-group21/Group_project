import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { InitComponent } from './init/init.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path:"\signUp", component: SignUpPageComponent},
  {path: "\init", component : InitComponent},
  {path: "", redirectTo : "\init", pathMatch:"full"},
  {path: "\addProduct", component: AddProductComponent},
  {path: "retrieveProducts", component: RetrieveProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
