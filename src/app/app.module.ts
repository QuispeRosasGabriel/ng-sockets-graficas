import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChartsModule } from 'ng2-charts';
import { GraficasComponent } from './components/graficas/graficas.component';
const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [AppComponent, GraficasComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
