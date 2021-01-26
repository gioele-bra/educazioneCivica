import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animalia',
  templateUrl: './animalia.component.html',
  styleUrls: ['./animalia.component.css']
})
export class AnimaliaComponent {
  query: string;
  apiServiceObs: Observable<Object>;
  results: any;

  chartType: string ='PieChart';
  chartData =  [];

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService) {
  }

  submit(): void {
    this.apiServiceObs = this.api.getAnimalia();
    this.apiServiceObs.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products) {
      this.results = res.products;
    }
  }
}
