import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

// Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// Cambiar el locale de la app
import localEs from '@angular/common/locales/es-UY';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEs );
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-uy' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
