import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Ventas' },
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April'];

  constructor(
    private http: HttpClient,
    public webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    // setInterval(() => {
    //   const newData = [
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //   ];
    //   this.lineChartData = [{ data: [...newData], label: 'Ventas' }];
    // }, 3000);
    this.getData();
  }

  private getData() {
    this.http
      .get('http://localhost:5000/graficas')
      .subscribe((data: any) => (this.lineChartData = data));
  }

  escucharSocket() {
    this.webSocketService.listen('cambio-grafica').subscribe((data: any) => {
      this.lineChartData = data;
    });
  }
}
