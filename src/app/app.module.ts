import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const appRoutes: Routes = [
  // {path: '', component: PropertyListComponent},
  // {path: 'rent-property', component: PropertyListComponent},
  // {path: 'add-property', component: AddPropertyComponent},
  // {path: 'property-detail/:id',
  //     component: PropertyDetailComponent,
  //     resolve: {prp: PropertyDetailResolverService}},
  // {path: 'user/login', component: UserLoginComponent},
  // {path: 'user/register', component: UserRegisterComponent},
  // {path: '**', component: PropertyListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
