import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  launchesArray = [];
  filteredObject: any;
  isLoading = false;

  constructor(private service: CustomService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  // Get launches on initial app load
  getLaunches(): void {
    this.isLoading = true;
    this.service.getLaunches()
    .subscribe((res: any) => {
      this.isLoading = false;
      this.launchesArray = res;
    }, err => {
      this.isLoading = false;
    });
  }

  // Filter data response object
  filterDataEmitted(filters: any): void {
    this.filteredObject = filters;
    if (this.filteredObject.launchYear !== null &&
      this.filteredObject.successfulLanding !== null && this.filteredObject.successfulLaunch !== null) {
      this.getAllFilteredData(this.filteredObject);
    } else if (this.filteredObject && this.filteredObject.successfulLaunch && !this.filteredObject.successfulLanding) {
      this.getLaunchFilterData(this.filteredObject.successfulLaunch);
    } else if (this.filteredObject && this.filteredObject.successfulLaunch && this.filteredObject.successfulLanding) {
      this.getLaunchLandFilterData(this.filteredObject);
    }
  }

  // Get all data based on year, launch and landing success
  getAllFilteredData(filterObj): void {
    this.isLoading = true;
    this.service.getAllLauncheByYear(filterObj)
    .subscribe((res: any) => {
      this.isLoading = false;
      this.launchesArray = res;
    }, err => {
      console.log('filter-err--', err);
      this.isLoading = false;
    });
  }

  // Get data based on launch success
  getLaunchFilterData(filterObj): void {
    this.isLoading = true;
    this.service.getLauncheSuccess(filterObj)
    .subscribe((res: any) => {
      this.isLoading = false;
      this.launchesArray = res;
    }, err => {
      this.isLoading = false;
      console.log('filter-err--', err);
    });
  }

    // Get data based on landing and launch success
  getLaunchLandFilterData(filterObj): void {
    this.isLoading = true;
    this.service.getLauncheAndLand(filterObj)
    .subscribe((res: any) => {
      this.isLoading = false;
      this.launchesArray = res;
    }, err => {
      this.isLoading = false;
      console.log('filter-err--', err);
    });
  }

}
