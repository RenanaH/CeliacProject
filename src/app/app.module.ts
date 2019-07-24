import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutCeliacCommunityComponent } from './about-celiac-community/about-celiac-community.component';
import { WhatThisCeliacComponent } from './what-this-celiac/what-this-celiac.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { OrderProductsComponent } from './order-products/order-products.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationProjectComponent } from './navigation-project/navigation-project.component';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { OrderProductsOldComponent } from './order-products-old/order-products-old.component';
import { ProductsService } from './products.service';
import { AddProductComponent } from './add-product/add-product.component';
import { OneProductComponent } from './one-product/one-product.component';
import { ConnectionService } from './connection.service';
import { ChildProductComponent } from './child-product/child-product.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutCeliacCommunityComponent,
    WhatThisCeliacComponent,
    ContactUsComponent,
    ProductComponent,
    OrderProductsComponent,
    LoginPageComponent,
    NavigationProjectComponent,
    OrderProductsOldComponent,
    AddProductComponent,
    OneProductComponent,
    ChildProductComponent,
    RegisterPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    //server
    HttpClientModule ,
    //material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule
    // Flex-layout
   // FlexLayoutModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports:[
  MatButtonModule,
  MatCheckboxModule],
  providers: [ProductsService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
