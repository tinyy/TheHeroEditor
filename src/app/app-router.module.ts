import { NgModule }   from '@angular/core';
import { RouterModule }   from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', pathMatch: 'full', redirectTo: '/heroes'},
            {path: 'heroes', component: HeroesComponent},
            {path: 'dashboard', component: DashboardComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
