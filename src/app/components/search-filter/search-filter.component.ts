import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {ComparerService} from '../../services/comparer.service';
import {WeaponFilters} from '../../models/WeaponFilters';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements AfterViewInit {
  @Output() filterEvent = new EventEmitter<string>();

  @ViewChildren('typeCheckboxes') typeCheckboxes: QueryList<MatCheckbox>;
  @ViewChildren('actionCheckboxes') actionCheckboxes: QueryList<MatCheckbox>;
  @ViewChildren('slotCheckboxes') slotCheckboxes: QueryList<MatCheckbox>;

  weaponTypes = WeaponFilters.default().types;
  weaponActions = WeaponFilters.default().actions;
  weaponSlots = WeaponFilters.default().slots;

  search = '';

  constructor(
    private comparer: ComparerService,
    private changeDetectionRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.typeCheckboxes.toArray().forEach((checkbox) => {
      if (this.comparer.filters.types.includes(checkbox.name))
        checkbox.checked = true;
    });

    this.actionCheckboxes.toArray().forEach((checkbox) => {
      if (this.comparer.filters.actions.includes(checkbox.name))
        checkbox.checked = true;
    });

    this.slotCheckboxes.toArray().forEach((checkbox) => {
      if (this.comparer.filters.slots.includes(checkbox.name))
        checkbox.checked = true;
    });

    this.changeDetectionRef.detectChanges();
  }

  onFilterKeyUp($event: KeyboardEvent): void {
    this.search = ($event.target as HTMLInputElement).value;
    this.filterEvent.emit(this.search);
  }

  onCheckedType(): void {
    const types = [];

    this.typeCheckboxes
      .toArray()
      .forEach((checkbox) => checkbox.checked && types.push(checkbox.name));

    this.comparer.filters.types = types;

    this.comparer.updateStoredFilters();
    this.filterEvent.emit(this.search);
  }

  onCheckedAction(): void {
    const actions = [];

    this.actionCheckboxes
      .toArray()
      .forEach((checkbox) => checkbox.checked && actions.push(checkbox.name));

    this.comparer.filters.actions = actions;

    this.comparer.updateStoredFilters();
    this.filterEvent.emit(this.search);
  }

  onCheckedSlot(): void {
    const slots = [];

    this.slotCheckboxes
      .toArray()
      .forEach((checkbox) => checkbox.checked && slots.push(checkbox.name));

    this.comparer.filters.slots = slots;

    this.comparer.updateStoredFilters();
    this.filterEvent.emit(this.search);
  }
}
