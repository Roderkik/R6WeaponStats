import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StatsService } from './stats.service';
import { Weapon } from './shared/models/Weapon';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'RainbowStats';
  weapons: Weapon[];
  weaponsTableDataSource: MatTableDataSource<Weapon>;

  @ViewChild(MatSort) sort: MatSort;
  armorSliderValue = 2;

  constructor(private stats: StatsService) {
  }

  ngOnInit(): void {
    this.weapons = this.stats.getWeapons();
    this.weaponsTableDataSource = new MatTableDataSource<Weapon>(this.weapons);
  }

  ngAfterViewInit(): void {
    this.weaponsTableDataSource.sort = this.sort;
  }

  applySearchFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.weaponsTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
