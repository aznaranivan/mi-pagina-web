import { bootstrapApplication } from '@angular/platform-browser';
import {AppModule} from './app/app.module'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationModule } from '@angular/core';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))