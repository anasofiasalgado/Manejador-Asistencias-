import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DndDirective } from './asistencias5000.directive';
import { DndComponent } from './dnd/dnd.component';
import { ProgressComponent } from './progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatTableModule } from '@angular/material/table';
import { ListAsistComponent } from './list-asist/list-asist.component';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    DndComponent,
    ProgressComponent,
    ListAsistComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents:[ConfirmDialogComponent],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
