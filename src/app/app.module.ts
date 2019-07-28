import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {  ButtonsModule, SortableModule, BsDropdownModule} from 'ngx-bootstrap';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewFormComponent } from './reviewForm/reviewForm.component';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      ReviewFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ButtonsModule.forRoot(),
      BsDropdownModule.forRoot(),
      NgxInputStarRatingModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
