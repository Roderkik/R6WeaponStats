import { Component, OnInit } from '@angular/core';
import { ComparerService } from '../../../core/comparer.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  armorSliderValue = 2;
  distanceSliderValue = 10;
  hasArmorPlates = true;

  constructor(private comparer: ComparerService) {
  }

  ngOnInit(): void {
  }

  distanceChanged(): void {
    this.updateParameters();
  }

  armorLevelChanged(): void {
    this.updateParameters();
  }

  hasArmorPlatesChanged(): void {
    this.updateParameters();
  }

  private updateParameters(): void {
    this.comparer.parameters = {
      armorLevel: this.armorSliderValue,
      hasRookPlates: this.hasArmorPlates,
      distance: this.distanceSliderValue
    };
  }


}
