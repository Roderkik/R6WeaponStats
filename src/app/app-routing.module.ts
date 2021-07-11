import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeaponOverviewPageComponent} from './components/pages/weapon-overview-page/weapon-overview-page.component';
import {WeaponPageComponent} from './components/pages/weapon-page/weapon-page.component';

const routes: Routes = [
  {path: '', component: WeaponOverviewPageComponent},
  {path: 'weapon/:name', component: WeaponPageComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
