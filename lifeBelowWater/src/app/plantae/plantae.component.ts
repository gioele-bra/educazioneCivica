import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantae',
  templateUrl: './plantae.component.html',
  styleUrls: ['./plantae.component.css']
})
export class PlantaeComponent {
  query: string;
  apiServiceObs: Observable<Object>;
  results: any;
  selectedOption: string = 'EX';
  chartType: string = 'PieChart';
  chartTypee: string = 'PieChart';
  chartData =  [];
  height: string;
  width: string;
  options = {
    is3D: true
   };

  options1 = [
      { name: "Extint in Captivity", value: "EX" },
      { name: "Extinct in Wild", value: "EW" },
      { name: "Total", value: "Total" }
    ]

  options2 = [
      { name: "PieChart", value: "PieChart" },
      { name: "ColumnChart", value: "ColumnChart" }
    ]

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService) {
  }

  submit(): void {
    this.chartData = [];
    this.apiServiceObs = this.api.getPlantae();
    this.apiServiceObs.subscribe((data) => {
      this.results = data; console.log(this.results);
      for (let i = 0; i < this.results.length; i++) {
        if(this.selectedOption == 'Extint in Captivity') { this.chartData.push([this.results[i].Name, this.results[i].EX]); }
        if(this.selectedOption == 'Extinct in Wild') { this.chartData.push([this.results[i].Name, this.results[i].EW]); }
        if(this.selectedOption == 'Total') { this.chartData.push([this.results[i].Name, this.results[i].Total]); }

        if(this.chartType == 'PieChart') { this.width = '600'; this.height = '600'; }
        if(this.chartType == 'ColumnChart') { this.width = '1500'; this.height = '1500'; }
      }
      this.chartTypee = this.chartType;
      console.log(this.chartData)
    });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products) {
      this.results = res.products;
    }
  }
}
