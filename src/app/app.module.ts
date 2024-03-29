import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// For Ng material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// For customize import ng module
import { NgmatModule } from './ngmat/ngmat.module';
// import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

import { CdkmoduleModule } from './cdkmodule/cdkmodule.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgmatModule, CdkmoduleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
