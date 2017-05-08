import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//my components
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ContactComponent } from './contact/contact.component';

import { ProductModule } from './products/product.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            
            { path: 'welcome', component: WelcomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Default to Welcome page
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // Wildcard incase of error => to welcome
        ]),

        ProductModule

    ],
    declarations: [
      AppComponent,
        WelcomeComponent,
        ContactComponent
        ],

   
    bootstrap: [ AppComponent ]
})
export class AppModule {}
