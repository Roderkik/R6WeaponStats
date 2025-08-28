import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ParametersComponent} from './components/parameters/parameters.component';
import {SearchFilterComponent} from './components/search-filter/search-filter.component';
import {WeaponsTableComponent} from './components/weapons-table/weapons-table.component';
import {WeaponOverviewPageComponent} from './components/pages/weapon-overview-page/weapon-overview-page.component';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {WeaponPageComponent} from './components/pages/weapon-page/weapon-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ParametersComponent,
    SearchFilterComponent,
    WeaponsTableComponent,
    WeaponOverviewPageComponent,
    WeaponPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    MatButtonModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
