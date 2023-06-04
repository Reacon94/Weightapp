import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { GraficComponent } from './grafic/grafic.component';
import { WeightInputComponent } from './weight-input/weight-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import {  RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficComponent,
    WeightInputComponent,
    HomeComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgChartsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
