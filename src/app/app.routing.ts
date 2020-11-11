import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DndComponent } from './dnd/dnd.component';
import { CursostableComponent } from './cursostable/cursostable.component';

const appRoutes: Routes = [
    { path: '', component: CursostableComponent },
    { path: 'dnd', component: DndComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);