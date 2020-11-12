import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DndComponent } from './dnd/dnd.component';
import { CursostableComponent } from './cursostable/cursostable.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursocComponent } from './cursoc/cursoc.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cursos-table', component: CursostableComponent },
    { path: 'dnd', component: DndComponent },
    { path: 'vista-cursos', component: CursosComponent },
    { path: 'cursoc', component: CursocComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);