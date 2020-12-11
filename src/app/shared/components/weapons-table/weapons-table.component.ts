import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Weapon } from '../../models/Weapon';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ComparerService } from '../../../core/comparer.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-weapons-table',
  templateUrl: './weapons-table.component.html',
  styleUrls: ['./weapons-table.component.scss'],
})
export class WeaponsTableComponent implements AfterViewInit {
  weapons: Weapon[];
  dataSource: MatTableDataSource<Weapon>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public comparer: ComparerService) {
    this.weapons = [];
  }

  ngAfterViewInit(): void {
    this.comparer.getWeapons().subscribe(
      (weapons) => {
        // This won't work (class won't be initialized) :(
        // this.weapons = weapons as Weapons[];

        weapons.forEach((weapon) =>
          this.weapons.push(
            new Weapon({
              name: weapon.name,
              type: weapon.type,
              action: weapon.action,
              slot: weapon.slot,
              RPM: weapon.RPM,
              damageRanges: weapon.damageRanges,
            })
          )
        );

        this.dataSource = new MatTableDataSource<Weapon>(this.weapons);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (weapon: Weapon, filter: string) => {
          const predicateFilter = JSON.parse(filter);
          const filterOver = `${ weapon.name }`.toLowerCase().trim();
          const words = predicateFilter.search.split(' ');

          if (!predicateFilter.attributes.types.includes(weapon.type))
            return false;

          if (!predicateFilter.attributes.actions.includes(weapon.action))
            return false;

          if (!predicateFilter.attributes.slots.includes(weapon.slot))
            return false;

          return words.every((word) => filterOver.includes(word));
        };
      },
      (error) => {
        throw new Error(error);
      }
    );
  }

  sortWeapons(): void {
    this.dataSource.sortData = (weapons: Weapon[], sort: MatSort) => {
      const active = sort.active;
      const direction = sort.direction;
      const parameters = this.comparer.parameters;

      if (!active || sort.direction === '') return weapons;

      return weapons.sort((a, b) => {
        let comparison: number;

        switch (active) {
          case 'name': {
            comparison = a.name.localeCompare(b.name);
            break;
          }
          case 'damage': {
            comparison = a.EDamage(parameters) - b.EDamage(parameters);
            break;
          }
          case 'RPM': {
            comparison = a.RPM - b.RPM;
            break;
          }
          case 'DPS': {
            comparison = a.EDPS(parameters) - b.EDPS(parameters);
            break;
          }
          case 'TTK': {
            comparison = a.ETTK(parameters) - b.ETTK(parameters);
            break;
          }
          case 'STK': {
            comparison = a.ESTK(parameters) - b.ESTK(parameters);
            break;
          }
        }

        // flip sign (the JavaScript way...) of comparison value when descending
        if (direction === 'desc') return comparison * -1;

        return comparison;
      });
    };
  }
}
