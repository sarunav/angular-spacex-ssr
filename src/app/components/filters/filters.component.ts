import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() spacexFilter = new EventEmitter<any>();
  @Input() launchParams: any;

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

  // Click event for successful launch
  filterSuccessfulLaunch(i: number, selected: any): void {
    this.launchSelectedIndex = i;
    this.launchSuccessSelected = selected.toLowerCase();
    this.emitFilterData = {
      successfulLaunch: this.launchSuccessSelected,
      launchYear: this.launchYearSelected ? this.launchYearSelected : '',
      successfulLanding: this.landingSuccessSelected ? this.landingSuccessSelected : ''
    };
    this.spacexFilter.emit(this.emitFilterData);
  }

  // Click event for launch year
  filterLaunchYear(i: number, selected: any): void {
    this.launchYearSelectedIndex = i;
    this.launchYearSelected = selected.toLowerCase();
    this.emitFilterData = {
      successfulLaunch: this.launchSuccessSelected ? this.launchSuccessSelected : '',
      launchYear: this.launchYearSelected,
      successfulLanding: this.landingSuccessSelected ? this.landingSuccessSelected : ''
    };
    this.spacexFilter.emit(this.emitFilterData);
  }

  // Click event for successful landing
  filterSuccessfulLanding(i: number, selected: any): void {
    this.landingSelectedIndex = i;
    this.landingSuccessSelected = selected.toLowerCase();
    this.emitFilterData = {
      successfulLaunch: this.launchSuccessSelected ? this.launchSuccessSelected : '',
      launchYear: this.launchYearSelected ? this.launchYearSelected : '',
      successfulLanding: this.landingSuccessSelected
    };
    this.spacexFilter.emit(this.emitFilterData);
  }

  // Clear all filters
  clearFilter(): void {
    this.landingSelectedIndex = null;
    this.launchYearSelectedIndex = null;
    this.launchSelectedIndex = null;
    this.landingSuccessSelected = '';
    this.launchYearSelected = '';
    this.launchSuccessSelected = '';
    this.emitFilterData = {
      successfulLaunch: '',
      launchYear: '',
      successfulLanding: ''
    };
    this.spacexFilter.emit(this.emitFilterData);
  }

}
