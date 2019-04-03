import {Component, Input, OnInit} from '@angular/core';
import * as chart from 'chart.js';
import {HttpClient} from "@angular/common/http";
import {GetDetailsService} from "../services/get-details.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chart: any;
  weatherdates = ['CNN011019-221140', 'CNN011019-221141', 'CNN011019-221142', 'CNN011019-221143', 'CNN011019-221144'];
  message: string;
  constructor() { }

  ngOnInit() {
    this.chart = new chart('canvas', {
      type: 'line',
      data: {
        labels: this.weatherdates,
        datasets : [
          {
            data: [0.468, 0.625, 0.584, 0.988, 0.234],
            borderColor: '#7eba95',
            backgroundColor: '#ba2424',
            pointBackgroundColor: '',
            fill: true
          },
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
