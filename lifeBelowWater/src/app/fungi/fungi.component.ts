import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fungi',
  templateUrl: './fungi.component.html',
  styleUrls: ['./fungi.component.css']
})
export class FungiComponent {
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
    { name: "Critically Endangered", value: "CR"},
    { name: "Endangered", value: "EN"},
    { name: "Vulnerable", value: "VU"},
    { name: "Total", value: "Total"}
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
    this.apiServiceObs = this.api.getFungi();
    this.apiServiceObs.subscribe((data) => {
      this.results = data; console.log(this.results);
      for (let i = 0; i < this.results.length; i++) {
        if(this.selectedOption == 'Endangered') { this.chartData.push([this.results[i].Name, this.results[i].EN]); }
        if(this.selectedOption == 'Critically Endangered') { this.chartData.push([this.results[i].Name, this.results[i].CR]); }
        if(this.selectedOption == 'Vulnerable') { this.chartData.push([this.results[i].Name, this.results[i].VU]); }
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
