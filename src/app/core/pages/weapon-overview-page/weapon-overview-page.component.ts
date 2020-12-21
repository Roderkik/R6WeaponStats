import { Component, ViewChild } from '@angular/core';
import { ComparerService } from '../../comparer.service';
import { WeaponsTableComponent } from '../../../shared/components/weapons-table/weapons-table.component';
import { PredicateFilters } from '../../../shared/models/PredicateFilters';

@Component({
  selector: 'app-weapon-overview-page',
  templateUrl: './weapon-overview-page.component.html',
  styleUrls: ['./weapon-overview-page.component.scss'],
  providers: [ComparerService],
})
export class WeaponOverviewPageComponent {
  @ViewChild(WeaponsTableComponent) weaponsTable: WeaponsTableComponent;

  constructor(private comparer: ComparerService) {
  }

  applyFilter(filter: string): void {
    const predicateFilter = new PredicateFilters({
      attributes: this.comparer.filters,
      search: filter.trim().toLowerCase(),
    });

    // Very jank way of fixing filter to run even when no input provided...
    this.weaponsTable.dataSource.filter = JSON.stringify(predicateFilter);
  }

  /**
   * Extra call to sorting of table as parameter updates
   * are not detected by the weapons table's MatSort
   */
  updateTable(): void {
    this.weaponsTable.sort.sortChange.emit();
  }
}
