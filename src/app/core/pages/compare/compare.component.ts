import { Component, ViewChild } from '@angular/core';
import { ComparerService } from '../../comparer.service';
import { WeaponsTableComponent } from '../../../shared/components/weapons-table/weapons-table.component';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
  providers: [ComparerService]
})
export class CompareComponent {
  @ViewChild(WeaponsTableComponent) weaponsTable: WeaponsTableComponent;

  constructor() {
  }

  applyFilter(filter: string): void {
    this.weaponsTable.dataSource.filter = filter.trim().toLowerCase();
  }
}
