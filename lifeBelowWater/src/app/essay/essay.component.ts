import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert = {type: 'success', message: "Nelle altre schede è possibile visualizzare i grafici relativi ai dati sull'estinzione di varie specie" };

@Component({
  selector: 'app-essay',
  templateUrl: './essay.component.html',
  styleUrls: ['./essay.component.css']
})
export class EssayComponent {

  alert: Alert;

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    (this.alert, 1);
  }

  reset() {
    this.alert = ALERTS;
  }

}
