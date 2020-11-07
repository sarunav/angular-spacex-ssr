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

  constructor(private service: CustomService) { }

  ngOnInit(): void {
    this.service.getLaunches()
    .subscribe((res: any) => {
      console.log('launches--', res[0]);
      this.launchesArray = res;
    });
  }

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
    console.log('emitted---', this.filteredObject);
  }

  getAllFilteredData(filterObj): void {
    this.service.getAllLauncheByYear(filterObj)
    .subscribe((res: any) => {
      console.log('filter-all-res--', res);
      this.launchesArray = res;
    }, err => {
      console.log('filter-err--', err);
    });
  }

  getLaunchFilterData(filterObj): void {
    this.service.getLauncheSuccess(filterObj)
    .subscribe((res: any) => {
      console.log('filter-launch-res--', res);
      this.launchesArray = res;
    }, err => {
      console.log('filter-err--', err);
    });
  }

  getLaunchLandFilterData(filterObj): void {
    this.service.getLauncheAndLand(filterObj)
    .subscribe((res: any) => {
      console.log('filter-launch-land-res--', res);
      this.launchesArray = res;
    }, err => {
      console.log('filter-err--', err);
    });
  }

}
