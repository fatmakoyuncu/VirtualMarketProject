import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'cart', component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DialogComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
