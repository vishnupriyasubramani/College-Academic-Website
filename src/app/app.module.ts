import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { SemesterComponent } from './semester/semester.component';
import { PlacementComponent } from './placement/placement.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ProgressreportComponent } from './progressreport/progressreport.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StudentLoginComponent,  // Ensure this matches the actual import
    ContactComponent,
    PlacementComponent,
    SemesterComponent,
    ProgressreportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
