import { Component, OnInit } from '@angular/core';
import {Serie} from '../serie';
import {SeriesService} from '../series.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {


  constructor(private serieService: SeriesService) { }
  private series: Array<Serie> = [];
  private average: number = 0;

  loadSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    }
    );
  }
  ngOnInit() {
    this.loadSeries();
    this.calculateAverage();

  }
  calculateAverage(){;

    this.average = (this.series.reduce((acc, serie) => acc + serie.seasons, 0) / this.series.length);
  }
    getSeries(){
    return this.series;
  }
  getAverage(){
    this.calculateAverage();
    return this.average;
  }

}
