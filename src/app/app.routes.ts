import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieAboutComponent } from './movie-about/movie-about.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'employee/:id',
        component: EmployeeComponent
    },
    {
        path: 'movies',
        component: MovieListComponent
    },
    {
        path: 'movies/:id',
        component: MovieDetailComponent,
        children: [
            {
                path: 'about',
                component: MovieAboutComponent
            },
            {
                path: 'cast',
                // component: MovieCastComponents
                loadComponent: () => import('./movie-cast/movie-cast.component').then(
                    c => c.MovieCastComponent
                )
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
