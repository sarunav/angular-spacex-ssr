import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() spacexFilter = new EventEmitter<any>();

  launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  successfulLaunch = ['True', 'False'];

  successfulLanding = ['True', 'False'];
  launchYearSelectedIndex: number;
  launchYearSelected = null;
  launchSelectedIndex: number;
  launchSuccessSelected = null;
  landingSelectedIndex: number;
  landingSuccessSelected = null;
  emitFilterData = {};

  constructor() { }

  ngOnInit(): void {
  }

  filterSuccessfulLaunch(i: number, selected: any): void {
    console.log('item---', selected);
    this.launchSelectedIndex = i;
    this.launchSuccessSelected = selected.toLowerCase();
    this.emitFilterData = {
      successfulLaunch: this.launchSuccessSelected,
      launchYear: this.launchYearSelected,
      successfulLanding: this.landingSuccessSelected
    }
    this.spacexFilter.emit(this.emitFilterData);
  }

  filterLaunchYear(i: number, selected: any): void {
    console.log('item---', selected);
    this.launchYearSelectedIndex = i;
    this.launchYearSelected = selected.toLowerCase();
    this.emitFilterData = {
      successfulLaunch: this.launchSuccessSelected,
      launchYear: this.launchYearSelected,
      successfulLanding: this.landingSuccessSelected
    }
    this.spacexFilter.emit(this.emitFilterData);
  }

  filterSuccessfulLanding(i: number, selected: any): void {
    console.log('item---', selected);
    this.landingSelectedIndex = i;
    this.landingSuccessSelected = selected.toLowerCase();
    this.emitFilterData = {
      successfulLaunch: this.launchSuccessSelected,
      launchYear: this.launchYearSelected,
      successfulLanding: this.landingSuccessSelected
    }
    this.spacexFilter.emit(this.emitFilterData);
  }

}
