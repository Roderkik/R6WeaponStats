import { Component, ViewChild } from '@angular/core';
import { ComparerService } from '../../comparer.service';
import { WeaponsTableComponent } from '../../../shared/components/weapons-table/weapons-table.component';
import { PredicateFilters } from '../../../shared/models/PredicateFilters';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
  providers: [ComparerService],
})
export class CompareComponent {
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
}
