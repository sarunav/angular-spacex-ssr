import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from 'src/app/custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  siteTitle = 'SpaceX Launch Programs';
  launchesArray = [];
  filteredObject: any;
  isLoading = false;
  routeParams: any;

  constructor(private service: CustomService,
              private router: Router,
              private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getLaunches();
    this.getActivatedParams();
  }

  getActivatedParams(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const launch = params.launch_success;
      const landing = params.landing_success;
      const year = params.launch_year;
      this.routeParams = {
        launch,
        landing,
        year
      };
  });
  }

  // Get launches on initial app load
  getLaunches(): void {
    this.router.navigate(['/programs']);
    this.isLoading = true;
    this.service.getLaunches()
    .subscribe((res: any) => {
      this.isLoading = false;
      this.launchesArray = res;
    }, err => {
      this.isLoading = false;
    });
  }

  // Filter data with selected filters
  filterDataEmitted(filters: any): void {
    this.filteredObject = filters;
    if (this.filteredObject.launchYear === '' &&
      this.filteredObject.successfulLanding === '' && this.filteredObject.successfulLaunch === '') {
      this.getLaunches();
    } else {
      this.getAllFilteredData(this.filteredObject);
    }
  }

  // Get all data based on year, launch and landing success
  getAllFilteredData(filterObj: any): void {
    this.router.navigate(['/programs'], { queryParams: { launch_success: filterObj.successfulLaunch,
      landing_success: filterObj.successfulLanding, launch_year: filterObj.launchYear }});
    this.isLoading = true;
    this.service.getAllLauncheByYearLanding(filterObj)
    .subscribe((res: any) => {
      this.isLoading = false;
      this.launchesArray = res;
    }, err => {
      console.log('filter-err--', err);
      this.isLoading = false;
    });
  }

}
