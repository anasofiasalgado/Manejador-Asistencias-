import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { DndDirective } from './asistencias5000.directive';
import { DndComponent } from './dnd/dnd.component';
import { ProgressComponent } from './progress/progress.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    DndComponent,
    ProgressComponent,
    CursosListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
