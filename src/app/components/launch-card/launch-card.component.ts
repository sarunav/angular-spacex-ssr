import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent implements OnInit, OnChanges {
  @Input() launchData: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): any {
    console.log(this.launchData);
    
  }

}
