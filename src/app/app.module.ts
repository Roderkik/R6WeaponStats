import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ParametersComponent } from './shared/components/parameters/parameters.component';
import { SearchFilterComponent } from './shared/components/search-filter/search-filter.component';
import { WeaponsTableComponent } from './shared/components/weapons-table/weapons-table.component';
import { CompareComponent } from './core/pages/compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametersComponent,
    SearchFilterComponent,
    WeaponsTableComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
