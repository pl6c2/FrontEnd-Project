import {Component, OnInit} from '@angular/core';
import * as chart from 'chart.js';
import {SharedServiceService} from '../services/shared-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  chart: any;
  weatherdates = ['CNN011019-221140', 'CNN011019-221141', 'CNN011019-221142', 'CNN011019-221143', 'CNN011019-221144'];
  message: string;

  constructor(public data: SharedServiceService) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.chart = new chart('canvas', {
      type: 'line',
      data: {
        labels: this.weatherdates,
        datasets : [
          {
            data: [0.468, 0.625, 0.584, 0.988, 0.234],
            borderColor: '#724fba',
            backgroundColor: '#ba2424',
            pointBackgroundColor: '',
            fill: true
          },
          // {
          //   data: [20, 20, 40, 30, 20],
          //   borderColor: '#ffcc00',
          //   fill: false
          // },
        ]
      },
      options: {
          legend: {
            display : false
          },
        scales: {
            xAxes: [{
              display : true
            }],
          yAxes: [{
              display: true
          }]
        }
      }
    });
  }
}
