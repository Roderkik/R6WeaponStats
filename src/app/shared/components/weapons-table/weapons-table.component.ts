import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Weapon } from '../../models/Weapon';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ComparerService } from '../../../core/comparer.service';

@Component({
  selector: 'app-weapons-table',
  templateUrl: './weapons-table.component.html',
  styleUrls: ['./weapons-table.component.scss']
})
export class WeaponsTableComponent implements OnInit, AfterViewInit {
  weapons: Weapon[];
  dataSource: MatTableDataSource<Weapon>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public comparer: ComparerService) {
  }

  ngOnInit(): void {
    this.weapons = this.comparer.getWeapons();
    this.dataSource = new MatTableDataSource<Weapon>(this.weapons);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
