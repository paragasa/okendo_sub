import { Routes } from '@angular/router';
import { ReviewFormComponent } from './reviewForm/reviewForm.component';


export const appRoutes: Routes = [
    {   path: '', component: ReviewFormComponent },
    // {
    //     path: '',
    //     canActivate: [],
    //     children:   [
    //         {   path: '/review', component: ReviewFormComponent}
    //     ]
    // },
    {   path: '**', redirectTo: '/review', pathMatch: 'full'}

];
