import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComparerService} from '../../services/comparer.service';
import {WeaponParameters} from '../../models/WeaponParameters';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss'],
})
export class ParametersComponent implements OnInit {
  @Output() parametersChanged = new EventEmitter<WeaponParameters>();

  constructor(public comparer: ComparerService) {
  }

  ngOnInit(): void {
  }

  distanceChanged($event: number): void {
    this.comparer.parameters.distance = $event;
    this.comparer.updateStoredParameters();
    this.parametersChanged.emit(this.comparer.parameters);
  }

  armorLevelChanged($event: number): void {
    this.comparer.parameters.armorLevel = $event;
    this.comparer.updateStoredParameters();
    this.parametersChanged.emit(this.comparer.parameters);
  }

  hasArmorPlatesChanged($event: MatCheckboxChange): void {
    this.comparer.parameters.hasRookPlates = $event.checked;
    this.comparer.updateStoredParameters();
    this.parametersChanged.emit(this.comparer.parameters);
  }
}
