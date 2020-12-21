import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareComponent } from './core/pages/compare/compare.component';
import { WeaponPageComponent } from './core/pages/weapon-page/weapon-page.component';

const routes: Routes = [
  {path: '', component: CompareComponent},
  {path: '**', redirectTo: ''},
  {path: 'weapon/:name', component: WeaponPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
