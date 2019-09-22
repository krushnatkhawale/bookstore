import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from '/app.component'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { BookControllerService } from './api/bookController.service';

@NgModule({
  imports:      [ FormsModule, BrowserModule, AppRoutingModule, HttpClient ],
  declarations: [ BookFormComponent, AppComponent, BookDetailsComponent, BookListComponent ],
  exports:      [ AppComponent ],
  providers: [ BookControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
