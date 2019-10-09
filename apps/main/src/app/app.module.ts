import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
