import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { ImportarXmlComponent } from './importar-xml/importar-xml.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { LoadingXmlComponent } from './dialog-loading-xml/loading-xml.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {NgIf} from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { DragDirective } from './importar-xml/dragDrop.directive';
import { ErrorXmlComponent } from './dialog-error-xml/error-xml.component';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { SuccessXmlComponent } from './dialog-success-xml/success-xml.component';
import { NullXmlComponent } from './dialog-warning-xml/null-xml.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportarXmlComponent,
    LoadingXmlComponent,
    DragDirective,
    ErrorXmlComponent,
    SuccessXmlComponent,
    NullXmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    MatListModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatDialogModule,
    NgIf,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
