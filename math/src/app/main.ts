import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from '@angular/core';
import {AppModule} from "./app.module";
import 'rxjs/add/operator/take'

// this is the magic wand
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);


